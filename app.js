const { default: axios } = require('axios');
const express =require('express')
const port =9000;
const app = express()

app.get('/api/movie/:search', (peticion, respuesta)=>{
    const peli = peticion.params.search
    console.log(peli);
    const  url=`https://api.themoviedb.org/3/search/movie?query=${peli}&api_key=8e6da8217e1eb84a246407f1542c55f3`
    
        axios.get(url)
            .then(tr=> respuesta.json(tr.data))
            .catch(err=> console.log(err))
})
app.get('/api/movie', (peticion, respuesta)=>{
    
    const  url='https://api.themoviedb.org/3/movie/343611?api_key=8e6da8217e1eb84a246407f1542c55f3'
        axios.get(url)
            .then(tr=> respuesta.json(tr.data))
            .catch(err=> console.log(err))
})

app.listen(port, () => {
    console.log(`server started at port ${port}`);
})