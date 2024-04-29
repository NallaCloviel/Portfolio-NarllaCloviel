document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,

        loop: true,

    }).type("Jovem Tech", {delay:900}).delete(10)
    .type("Desenvolvedora Jr", {delay:1000}).delete(17)
    .type("Entusiasta por Dados")
    
    
    .go()
});


