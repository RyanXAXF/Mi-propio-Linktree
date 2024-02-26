const more = document.querySelector("#mas");

    const link = "http://127.0.0.1:5500/index.html";
    

more.addEventListener("click", function(){ 
    Swal.fire({ 
        title :"Compartir Vinculo",
        text: "http://127.0.0.1:5500/index.html"
        }).then((result) => {
                if (result.isConfirmed){
                    navigator.clipboard.writeText(link)
                    .then(() => {console.log('Text copied to clipboard...')})
                    .catch(err => {
                      console.log('Something went wrong', err);
                    });
                    Swal.fire("Copiado!", "", "success");

                }
            })

 })


