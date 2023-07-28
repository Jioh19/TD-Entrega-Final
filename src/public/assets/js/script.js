// const token =
// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSnVhbiIsInBhc3N3b3JkIjoiT2giLCJpYXQiOjE2OTA1NzIyNDgsImV4cCI6MTg3MDU3MjI0OH0.h_ln6urU-pvK5TyWE60253qi4NvDvAYH1VxHFmzNM2Q";

async function filtrar() {
	event.preventDefault();
	const listar = document.querySelector(".table_list");
	const name = document.getElementById("name");
	const groupname = document.getElementById("groupname");
	const fechaInicio = document.getElementById("fechaInicio");
	const fechaTermino = document.getElementById("fechaTermino");
	const token = localStorage.getItem("myToken");
	if (token == null) {
		login();
	} else {
		try {
			const response = await axios.post(
				"/filter",
				{
					name: name.value,
					groupname: groupname.value,
					fechaInicio: fechaInicio.value,
					fechaTermino: fechaTermino.value,
				},
				{
					headers: {
						"x-access-token": token,
					},
				}
			);
			const datos = response.data.rows;
			listar.innerHTML = "";
			datos.forEach((e) => {
				listar.innerHTML += `
                <tr id=${e.id}>
                    <th scope="row">${e.departmentid}</th>
                    <td>${e.name}</td>
                    <td>${e.groupname}</td>
                    <td>${e.businessentityid}</td>
                    <td>${e.startdate}</td>
                </tr>`;
				name.value = "";
				groupname.value = "";
				fechaInicio.value = "";
				fechaTermino.value = "";
			});
		} catch (err) {
			localStorage.removeItem("myToken");
			console.error(err);
		}
	}
}

function login() {
	const modal = document.querySelector(".modal");
	modal.classList.add("d-block");
}

async function signIn() {
	const user = document.getElementById("user");
	const password = document.getElementById("password");
	try {
		const response = await axios.post("/token", {
			name: user.value,
			password: password.value,
		});
		localStorage.setItem("myToken", response.data.token);
	} catch (err) {
		console.error(err);
	} finally {
		const modal = document.querySelector(".modal");
		modal.classList.remove("d-block");
	}
}
