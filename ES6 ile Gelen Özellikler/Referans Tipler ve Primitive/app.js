//Referans Tipleri ve Primitive

//String ve Int gibi veri tipleri ilkel(primitive) veri tipleridir.
//Array, Object, Map gibi veri tipleri reference veri tipleridir.

//Bunların farkları şöyle açıklanabilir => 

//İlkel tipler direkt olarak veriyi içlerinde tutarlar
//Reference veri tipleri yalnızda verinin bellekteki yerini tutarlar.

//Bu durumu Python'da öğrenmiştim, iki arrayı iki değişkene atayıp conditionals'a tabi tuttuğumzuda false verecektir

//Örneğin burada iki satır da tamamen aynı işi yapmakta
const array1 = [1,2,3]; //burada değişken isminin karşısına bir array formatı girdiğimiz için otomatikman aşağıdakini yapıyor aslında.
const array2 = new Array(1,2,3); //buradaki noktaya dikkat edelim arrayı new ile oluşturup daha sonra array2'ye atıyoruz