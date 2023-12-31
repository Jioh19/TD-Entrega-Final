## JS Express SQL JWT
### En el archivo db.sql estan todas las queries utilizadas.

Errores típicos lo imprime con explicación en la consola de backend gracias a la función "errorCode(err)" en "error.js".

En query1.vsc, query2.csv y query3.csv se encuentran los resultados de las 3 queries solicitadas.

### Manejo de errores

En el frontend simplemente emite un error de tipo "400" a través de Axios.

Ej: si uno ingresa "fdfdsfds" en el campo de fechaInicio se emite:


Backend: 
    ERROR!
    syntax_error_for_date_type

error: invalid input syntax for type date: "fdfdsfds"
    at C:\Users\Jioh\projects\Javascript\Tutorial\Final\HR\node_modules\pg-pool\index.js:45:11
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async filter (C:\Users\Jioh\projects\Javascript\Tutorial\Final\HR\src\controller\filter.controller.js:8:20)

FrontEnd:

M {message: 'Request failed with status code 400', name: 'AxiosError', code: 'ERR_BAD_REQUEST', config: {…}, request: XMLHttpRequest, …}



### Autenticación

El sitio verifica antes de cualquier operación si existe un token de validación. Si no existe, abre un modal

para hacer login y recibir un token. Una vez que encuentre el token, abrirá automáticamente la lista completa de 

la base de datos.

Login válido es:

User: Juan
Password: Oh

La verificación se hace en el controller "token.controller.js", pensando que esto se haría ingresando a una base de datos.

Y esto genera un token que dura 5 minutos. 

La función principal de "filtrar()" verifica la existencia de un token mediante la función.

```js
router.post("/filter", auth, filter);
```
Donde la función "verifyToken()" verifica la validez de este en conjunto con la clave secreta en el .env

Se utilizó "localStorage" para guardar el token; no se cuál es el protocolo adecuado para guardar Tokens.

### Función de filtrado

Se cumplió con el requisito de buscar de manera compuesta en la base de datos, o sea se puede buscar por más de 1 campo a la vez.

Además en "name" y "groupname" se puede buscar por parciales, o sea "Production" se puede buscar por "duct" y es independiente 

de si son mayúsculas o no.

Las fechas de inicio y termino se ingresan en el formato:

YYYY-MM-DD
