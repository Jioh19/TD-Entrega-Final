//Listar tareas
async function filtrar() {
	event.preventDefault();
	const listar = document.querySelector(".table_list");
	const name = document.getElementById("name");
	const groupname = document.getElementById("groupname");
	const fechaInicio = document.getElementById("fechaInicio");
	const fechaTermino = document.getElementById("fechaTermino");

	try {
		const response = await axios.post("/filter", {
			name: name.value,
			groupname: groupname.value,
			fechaInicio: fechaInicio.value,
			fechaTermino: fechaTermino.value,
		});
		const datos = response.data.rows;
		console.log(datos[0]);
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
            fechaTermino.value= "";

		});
	} catch (err) {
		console.error(err);
	}
}
