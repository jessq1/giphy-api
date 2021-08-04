
function Giphy(props){
    return  (
        <div>
          {props.giphy.data.map((data, index) => {
                return (
                    <div key={index}>
                        <img src={data.images.original.url} alt="Alt text"></img>
                    </div>
                    );
                })}
        </div>
      )
}


  export default Giphy;
