const link = '192.168.0.8'

const httpService = {
    login: (data: any) => {
        return fetch(`http://${link}:3000/api/user/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    },
    createUser: (data: any) => {
        return fetch(`http://${link}:3000/api/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    },
    // Nova função finalizarCompra
    finalizarCompra: (data: any) => {
        return fetch(`http://${link}:3000/api/products/finalize-cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    },
    recuperarSenha: (email: string) => {
        return fetch(`http://${link}:3000/api/user/recuperar-senha`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });
    },
};

export default httpService;
