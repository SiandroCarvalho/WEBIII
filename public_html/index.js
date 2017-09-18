function preencherEndereco(){
     var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4){
            var a = document.getElementById("endereco");
            
            var resposta = JSON.parse(xhr.responseText);
         
            var b = "<p> CEP: "+resposta.cep+"</p>";
                b += "<p> Logradouro: "+resposta.logradouro+"</p>";
                b += "<p> Complemento: "+resposta.complemento+"</p>";
                b += "<p> Bairro: "+resposta.bairro+"</p>";
                b += "<p> Localidade: "+resposta.localidade+"</p>";
                b += "<p> UF: "+resposta.uf+"</p>";
                b += "<p> Unidade: "+resposta.unidade+"</p>";
                b += "<p> IBGE: "+resposta.ibge+"</p>";
                b += "<p> GIA: "+resposta.gia+"</p>";
            
            
            
            a.innerHTML = b;
        }
    };
    xhr.open("get", "https://viacep.com.br/ws/"+document.forms[0].cep.value+"/json/", true);
    xhr.send(null);
    
    
}

function iniciarEventos(){
    
    var botao = document.getElementById("botao");
    
    botao.onclick = preencherEndereco;
    
    
}

/*function init() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4){
            var response = xhr.responseText;
            var array = JSON.parse(response);
            alert(array[1].nome);
        }
    };
    xhr.open("get", "JSONServlet", true);
    xhr.send(null);
    
}*/

onload = iniciarEventos;


