var hei = document.getElementById('InputHeight'); 
var wei = document.getElementById('InputWeight'); 
var image = ["image1.jpg",
                "image2.png",
                "image3.jpg"];
var nametoon = ["ANNA",
                "DORAEMON",
                "CONAN"];

var input_nametoon = document.getElementById('InputCaptcha');
var result_panel = document.getElementById('result-panel');

var tmp=0;

function result_bmi() {
    let sum = wei.value/((hei.value/100)*(hei.value/100));
        if(hei.value==""&&wei.value==""){
            alert("กรุณากรอกน้ำหนักและส่วนสูง!!");
        }else if (hei.value == ""){
            document.getElementById('show_hei').innerHTML="กรุณากรอกส่วนสูง!!";
            document.getElementById('show_wei').innerHTML= null;
        }else if (wei.value == ""){
            document.getElementById('show_wei').innerHTML="กรุณากรอกน้ำหนัก!!";
            document.getElementById('show_hei').innerHTML= null;
        }else{
            document.getElementById('show_hei').innerHTML= null;
            document.getElementById('show_wei').innerHTML= null;
            if (input_nametoon.value == nametoon[tmp] ){
                ClickImg();
                input_nametoon.value = '';
                result_panel.id='';
                document.getElementById('show_err').innerHTML="";
                document.getElementById('result').innerHTML = sum.toFixed(2);
                for(let i=1;i<=5;i++){
                document.getElementsByTagName('tr')[i].classList.remove('bmi'+i);
                }
                if(sum<18.5){
                document.getElementsByTagName('tr')[1].classList.add('bmi'+1);
                }else if (sum<=22.90){
                document.getElementsByTagName('tr')[2].classList.add('bmi'+2);
                }else if (sum<=24.90){
                document.getElementsByTagName('tr')[3].classList.add('bmi'+3);
                }else if (sum<=29.90){
                document.getElementsByTagName('tr')[4].classList.add('bmi'+4);
                }else if(sum>=30){
                document.getElementsByTagName('tr')[5].classList.add('bmi'+5);
                }
            }else {
            document.getElementById('show_err').innerHTML="ระบุชื่อในภาพไม่ถูกต้อง!!";
            }
        }
    }

    function ClickImg() {
        let position = Math.floor((Math.random() * 3));
        tmp=position;    
        document.getElementById('CaptchaImage').src = image[position];
    }

    function upper_word(){
        var word = document.getElementById("InputCaptcha");
        word.value = word.value.toUpperCase();
    }

    function err_hei(){
        if((hei.value<100 || hei.value>250)&&hei.value!=""){
            alert("ค่าส่วนสูงในการกรอกอยู่อยู่ระหว่าง 100 ถึง 250 cm.");
            hei.value="";
            document.getElementById('show_hei').innerHTML= null;
        }
    }
    function err_wei(){
        if((wei.value<30 || wei.value>200)&&wei.value!=""){
            alert("ค่าน้ำหนักในการกรอกอยู่ระหว่าง 30 ถึง 200 kg");
            wei.value="";
            document.getElementById('show_wei').innerHTML= null;
    }
}