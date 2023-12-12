const httpService = {
    login: (data: any) => {
        return fetch("http://192.168.0.8:3000/api/user/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    },
    createUser: (data: any) => {
        return fetch("http://192.168.0.8:3000/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    },
    // Nova função finalizarCompra
    finalizarCompra: (data: any) => {
        return fetch("http://192.168.0.8:3000/api/products/finalize-cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    },
    buscarProdutos: () => {
        return fetch("http://seu-servidor.com/api/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
    },
};

export default httpService