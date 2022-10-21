// we don`t need to do every time enums better to do literal types
enum RequestTypeWrong {
    GET = "get",
    POST = "post"
}

function fetchWithAuthWrong(url: string, method: RequestTypeWrong) {

}


// that`s correct
function fetchWithAuth(url: string, method: "post" | "get"): 1 | -1 {
    return 1;
}

fetchWithAuth("https://localhost:8080", "post");

let method = "post";

fetchWithAuth("https://localhost:8080", method as "post"); // type casting
