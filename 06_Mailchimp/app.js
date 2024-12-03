const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

const apiKey = "abcdef1234567890-us21"; // API Key
const list_id = "1234567890abcde"; // List ID
const serverPrefix = "us21"; // Server Prefix

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Ruta GET para el formulario principal
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

// Ruta POST para procesar el formulario
app.post("/", (req, res) => {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    // Datos enviados a la API de Mailchimp
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    // URL y opciones de la solicitud
    const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${list_id}`;
    const options = {
        method: "POST",
        auth: `anyUser:${apiKey}` // `anyUser` puede ser cualquier string
    };

    // Solicitud HTTPS a la API de Mailchimp
    const mailRequest = https.request(url, options, (response) => {
        let responseData = "";
        
        response.on("data", (chunk) => {
            responseData += chunk;
        });

        response.on("end", () => {
            const parsedData = JSON.parse(responseData);
            console.log(parsedData);

            if (response.statusCode === 200 && parsedData.error_count === 0) {
                res.sendFile(__dirname + "/success.html");
            } else {
                console.error("Error al suscribirse:", parsedData.errors[0]?.error || "Desconocido");
                res.sendFile(__dirname + "/failure.html");
            }
        });
    });

    mailRequest.on("error", (error) => {
        console.error("Error en la solicitud:", error);
        res.sendFile(__dirname + "/failure.html");
    });

    mailRequest.write(jsonData);
    mailRequest.end();
});

// Servidor escuchando en el puerto 3000
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});

