function setup() {
    createCanvas(400, 400);

}
function draw() {
    background(225,225,225,3);

//* ---------------- kleurtjes ---------------- *//
    let schaduw = ('#EDEDED');
    let huidskleur = ('#F5DDD5');
    let shirtFill = ('#95ABF9');
    let shirtStroke = ('#7289DA');
    let zwart =('#1D1D1B');
    let wit = ('white');
    let lichaamFill = ('#95ABF9');
    let lichaamStroke = ('#7289DA');
    let haarFill = ('#A46947');
    let haarStroke = ('#4C230F');
    let ogenBinnen = ('#6EB3FF')
    let wenkies = ('#6F402C')

    let kleurenLijstje = ["#123456","#C0FFEE","#B4DA55"];
    let randomKleur = (kleurenLijstje);

//* ---------------- schaduw ---------------- *//
    fill(schaduw);
    noStroke();
//schaduw
    ellipse(198, 338, 100, 40);

//* ---------------- armen en mauwen ---------------- *//
    fill(huidskleur);
    noStroke();
//linker arm
    push();
    translate(width / 2, height / 2);
    rotate(PI / 5.9);
    rect(-12, 21.4, 16, 86, 30);
    pop();
//rechter arm
    push();
    translate(width / 2, height / 2);
    rotate(PI / 1.2);
    rect(-8.5, -57, 16, -48, 12);
    pop();
//kleur shirt
    fill(shirtFill);
    stroke(shirtStroke);
    strokeWeight('4.7');
//rechter mauw
    push();
    translate(width / 2, height / 2);
    rotate(PI / 1.2);
    rect(-16, -75, 34, 52, 12);
    pop();
//linker mauw
    push();
    translate(width / 2, height / 2);
    rotate(PI / 5.9);
    rect(-20, 25, 34, 52, 12);
    pop();

//* ---------------- broek ---------------- *//
    fill(zwart);
    noStroke();
//linker been
    push();
    translate(width / 2, height / 2);
    rotate(PI / 18.0);
    rect(-9, 73, 18, 70, 8);
    pop();
//rechter been
    push();
    translate(width / 2, height / 2);
    rotate(PI / -18.0);
    rect(-13, 73, 18, 70, 8);
    pop();

//* ---------------- lichaam ---------------- *//
    fill(lichaamFill);
    stroke(lichaamStroke);
//shirt
    rect(165, 213, 65, 86, 12, 12, 6, 6)
//nek
    fill(huidskleur);
    rect(183, 169, 27, 50, 12)

//* ---------------- oren ---------------- *//
    fill(huidskleur);
    stroke(zwart);
//linker oor
    rect(125, 134, 25, 38, 30)
//rechter oor
    rect(244, 134, 25, 38, 30)

//* ---------------- haar achterkant ---------------- *//
    fill(haarFill);
    stroke(haarStroke);
//linker haar zijkant
    ellipse(171, 117, 102, 102);
//linker haar
    ellipse(169, 73, 130, 84);
//rechter haar zijkant
    ellipse(235, 105, 80, 105);

//* ---------------- hoofd ---------------- *//
    fill(huidskleur);
    stroke(zwart);
    rect(135, 87, 124, 118, 25, 25, 49, 49)

//* ---------------- haar voorkant ---------------- *//
    fill(haarFill);
    stroke(haarStroke);
//rechter haar
    ellipse(229, 51, 130, 84);

//* ---------------- ogen ---------------- *//
    fill(wit);
    strokeWeight('4');
    stroke(zwart);
//linker oog
    rect(150, 120, 30, 55, 30);
//rechter oog
    rect(214, 120, 30, 55, 30);

//binnenkant ogen
    fill(zwart);
    stroke(ogenBinnen);
//binnenkant ogen links
    rect(157, 129, 16, 37, 30);
//binnenkant ogen rechts
    rect(221, 129, 16, 37, 30);

//binnen kant, binnen kant ogen
    fill(wit);
    noStroke();
//binnen kant, binnen kant ogen links
    rect(157, 133, 5, 10, 30);
    rect(162, 144, 6, 6, 30);
//binnen kant, binnen kant ogen rechts
    rect(220, 135, 5, 10, 30);
    rect(226, 144, 6, 6, 30);

//* ---------------- wenkies ---------------- *//
    push();
    fill(wenkies);
    noStroke();
//linker wenkie
    translate(width / 2, height / 2);
    rotate(PI / 2.2);
    rect(-103, 7, 10, 34, 30);
//rechter wenkie
    translate(width / 2, height / 2);
    rotate(PI / 33.0);
    rect(-315, -228, 10, 31, 30);

//* ---------------- mond ---------------- *//
    fill(zwart);
    translate(width / 2, height / 2);
    rotate(PI / 180.0);
    rect(-442, -382, 5, 21.5, 30);
    pop();

//* ---------------- shirt cirkeltjes ---------------- *//
    fill(lichaamFill);
    stroke(wit);
    strokeWeight('7');
//midden
    ellipse(197.4, 242, 12, 12);
//links
    ellipse(184.4, 242, 12, 12);
//rechts
    ellipse(210.4, 242, 12, 12);

//* ---------------- neus ---------------- *//
    noFill();
    strokeWeight('4.7');
    stroke(0, 0, 0);
    bezier(199, 150, 198, 166, 185, 167, 200, 169);
}