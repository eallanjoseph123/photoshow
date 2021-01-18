import React, {useState, useEffect } from 'react' 
import getAllPhotos from '../Services/PhotoService'
import ImageDetail from './ImageDetail'

function Home(){

    const [photos, setPhotos] = useState(null);

    async function getPhotos(){
        await getAllPhotos().then(result=>{
            setPhotos(prevData =>{
                return {
                    data : result.data
                }
            })
        }).catch(e=>{
            console.log(e);
        });
    }

    useEffect(() => {
        getPhotos();
    }, [])

  
        return (
            <div className="Home">
                <div className="row">
                    {photos && photos.data.length > 0 ? photos.data.map(element => <ImageDetail key={element.id} data={element} />) : ""}
                </div>
               
            </div>
          );
    
}



export default Home;
