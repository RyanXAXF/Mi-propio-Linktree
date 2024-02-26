const more = document.querySelector("#mas");

    const link = "https://ryanxaxf.github.io/Mi-propio-Linktree/";
    

more.addEventListener("click", function(){ 
    Swal.fire({ 
        title :"Compartir Vinculo",
        text: "https://ryanxaxf.github.io/Mi-propio-Linktree/"
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


