/* Se requiere el listado de empleados que han iniciado labores en cualquier departamento durante el año 2009, 
se debe mostrar la siguiente información: businessentityid, nationalidnumber, departmentid, name (del departamento),
groupname, startdate, la salida debiese ser similar a la siguiente. */
SELECT e.businessentityid, e.nationalidnumber, d.departmentid, d.name, d.groupname, ed.startdate 
FROM employeedepartmenthistory AS ed
INNER JOIN employee AS e ON e.businessentityid = ed.businessentityid
INNER JOIN department AS d ON d.departmentid = ed.departmentid
WHERE ed.startdate BETWEEN '2009-01-01' AND '2009-12-31';

/* Generar un listado de personas que no tienen segundo nombre (middlename), la salida debiese similar a la siguiente: */
SELECT businessentityid, persontype, namestyle, title, firstname, middlename, lastname, suffix 
FROM person WHERE middlename = 'NULL';

/* Se requiere un listado con las cantidades de personas por sufijo que se presentan en la tabla person, se deben omitir 
en la muestra lo que no cuentan con dicha definición, la salida debiese ser similar a la siguiente. */
SELECT suffix, count(suffix) FROM person
WHERE suffix != 'NULL' GROUP BY suffix;

/* Funcion principal de filtro */
SELECT d.departmentid, d.name, d.groupname, e.businessentityid, ed.startdate 
FROM employeedepartmenthistory AS ed
INNER JOIN employee AS e ON e.businessentityid = ed.businessentityid
INNER JOIN department AS d ON d.departmentid = ed.departmentid;