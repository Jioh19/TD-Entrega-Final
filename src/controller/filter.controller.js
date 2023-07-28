const pool = require("../config/db.config");
const { errorCode } = require("../error");

const filter = async (req, res) => {
	const { name, groupname, fechaInicio, fechaTermino } = req.body;
	try {
		//compoundFilter(name, groupname, fechaInicio, fechaTermino);
		const response = await pool.query(compoundFilter(name, groupname, fechaInicio, fechaTermino));
		res.status(200).json({
			status: 200,
			rows: response.rows,
		});
	} catch (err) {
		res.status(400).json({
			status: 400,
			message: errorCode(err),
		});
	}
};

function compoundFilter(...args) {

	let valid = 0;
    let compound = 0;
	args.forEach((element) => {
		if (element !== "") {
			valid++;
		}
	});
	let query = `SELECT d.departmentid, d.name, d.groupname, e.businessentityid, ed.startdate FROM employeedepartmenthistory 
    AS ed INNER JOIN employee AS e ON e.businessentityid = ed.businessentityid INNER JOIN department AS d ON d.departmentid = ed.departmentid`;
	//console.log(valid);
	if (valid > 0) {
		query += " WHERE";
	}
	if (args[0] !== "" && args[0] !== undefined) {
        if(compound === 0) {
            compound++;
        } else {
            query += ' AND';
        }
		query += ` LOWER(d.name) LIKE LOWER('%${args[0]}%')`;

	}
    if (args[1] !== "" && args[1] !== undefined) {
		if (compound === 0) {
			compound++;
		} else {
			query += " AND";
		}
		query += ` LOWER(d.groupname) LIKE LOWER('%${args[1]}%')`;
	}
    if (args[2] !== "" && args[2] !== undefined) {
		if (compound === 0) {
			compound++;
		} else {
			query += " AND";
		}
		query += ` ed.startdate > '${args[2]}'`;
	}
    if (args[3] !== "" && args[3] !== undefined) {
		if (compound === 0) {
			compound++;
		} else {
			query += " AND";
		}
		query += ` ed.startdate < '${args[3]}'`;
	}

    query += ";";
	//console.log(query);
	return query;

}

module.exports = {
	filter,
};
