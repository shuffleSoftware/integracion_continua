# 211131750_06
####  Integración Continua (I): desarrollo del producto
 - [Requerimientos](#markdown-header-requirements)
 - [Primeros pasos](#markdown-header-getting-started)
 - [Errores comunes](#markdown-header-errores)

#### Requerimientos
| Herramienta | Versión |
| --- | --- |
| Git | 2.32.0 |
| Node | 16.15.0 |
| Visual Studio Code | 1.66.2 |


#### Primeros pasos
```
git clone git@github.com:shuffleSoftware/integracion_continua.git
cd integracion_continua
git checkout -b <mi-rama>
npm install
echo "NODE_PORT=3000" > .env
npm run debug
navegar a localhost:3000
```

#### Enviar cambios
Para revisar que tienes cambios locales\
`git fetch` para obtener cambios remotos y evitar sobre-escrituras problemáticas
`git status` obtendrás en rojo los archivos que bien han sido modificados o no están administrados por git.
`git diff <nombre-de-archivo>` te dará las diferencias de la última versión obtenida contra tus cambios locales
`git add <nombre-de-archivo>` para que git lo reconozca o `git add .` para añadir el directorio actual
`git commit -m 'detalles del cambio'` para crear una versión con los cambios añadidos del paso anterior
`git push origin <mi-rama>` para enviar los cambios al repositorio remoto con los cambios locales

#### Errores
- Err1
- Err2