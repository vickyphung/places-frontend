import { useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
import NavBar from '../../NavBar';
import axios from 'axios';

const DeletePlace = (props) => {

    console.log("Made it to the Delete Place Component")
    console.log(props.placeId)

    // const navigate = useNavigate();

    useEffect(()=>{
      const delPlace = async () => {
        if (props.placeId) {
          const response = await axios.delete(
            `http://localhost:8800/places/delete/${props.placeId}`
          );
          console.log(response);
        }
      };
      delPlace();
      // eslint-disable-next-line
      // useNavigate('../places');
    }, [props.placeId])

    // return (
    //     <div>
    //     <h1>Delete Place</h1>
    //     </div>
    // )


return (
  <NavBar />
)

  }

export default DeletePlace;



