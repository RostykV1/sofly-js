console.warn("SOFLY CODES INICIATED")

export default class sofly_codes{
    scrollHorizontal(element){
        const slider = element;
        let isDown = false;
        let startX;
        let scrollLeft;
        slider.addEventListener('mousedown', (e) => {
          isDown = true;
          slider.classList.add('active');
          startX = e.pageX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
          isDown = false;
          slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
          isDown = false;
          slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
          if(!isDown) return;
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 1; //scroll-fast
          slider.scrollLeft = scrollLeft - walk;
        });
        return;
    }
    typeWrite(text, speed, innerElement){
        if(!text&&!speed&&!innerElement) return;
        var i = 0;
        var txt = text;
        var speed = speed;
        let interval = setInterval(() => {
            innerElement.innerHTML += txt.charAt(i);
            i = i+1
            if(i == txt.length){
                clearInterval(interval)
                return;
            }
        }, speed);
        return;
    }
    progressBlocks(progress_, elements, element){
        let one = elements / 100;
        let two = progress_ * one;
        let three = two.toString().split(".")[0]
        for(i = 0; i < three; i++){
            element.getElementsByTagName("li").setAttribute("class", "active__")
        }
        return;
    }
    warn(text){
        console.warn(text)
        return;
    }
}