
/*

YENİ BİR COMPONENT OLUŞTURURKEN İŞE TYPESCRİPT DOSYAMI OLUŞTURURAK BAŞLADIM
AYRICA BÜTÜN BU İŞLEMLERİ NG KOMUTUYLA DA YAPABİLDİĞİMİ ÖĞRENDİM


*/


import { Component } from '@angular/core';

@Component({

//BİR SELECTOR SEÇİP ONA BAĞLI ÇALIŞACAK DOSYALARIMIN ADINI GİRİP FİZİKİ OLARAKDA OLUŞTURDUM...
selector:'todo',
templateUrl: './todo.component.html',
styleUrls:['./todo.component.css']

})

export class ToDoComponent {
//normalde bu nesneye erişilemez ancak metod yardımıyla kullanmayı basardım
private name="ÖĞRENCİNİN"


objcts=[
{ Sorumluluklar:"Odev Yapmak" , Durumu:"Tamamlandı" },
{ Sorumluluklar:"Proje Hazırlamak" , Durumu:"Beklemede" },
{ Sorumluluklar:"Hobiler Edinmek" , Durumu:"Tamamlandı" },
{ Sorumluluklar:"Sosyal Sorumluluklar" , Durumu:"Tamamlandı" }

];


getName(){

return this.name;


}

}