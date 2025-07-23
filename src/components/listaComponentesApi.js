export const getListaContactos = () => {
    return fetch('https://playground.4geeks.com/contact/agendas/DavidVela1712/contacts', {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .then(responseJSON => {
            return responseJSON.contacts
        })
        .catch(error => {
            console.log("Error en la llamada GET:" + error);
            return [];
        })
}

export const postListaContactos = (nombre, email, telefono, direccion) => {
    return fetch('https://playground.4geeks.com/contact/agendas/DavidVela1712/contacts', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                "name": nombre,
                "phone": telefono,
                "email": email,
                "address": direccion
            })
    })
        .then(response => {
            return response.json();
        })
        .then(() => {
            return getListaContactos();
        })
        .catch(
            error => {
                console.log("Error:", error);
                return [];
            });
}