addEventListener("load", () => {
    let parent = document.querySelector("#canvas"),
        canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        height = canvas.height = parent.clientHeight,
        width = canvas.width = parent.clientWidth

        function Circle(x, y, dx, dy, radius){
            this.x = x
            this.y = y
            this.dx = dx
            this.dy = dy
            this.radius = radius

            this.draw = function (){
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
                ctx.fillStyle = "#3370d4";
                ctx.closePath();
                ctx.fill();
            }

            this.update = function(){
                if(this.x + this.radius > width || this.x - this.radius < 0){
                    this.dx = -this.dx
                }
    
                if( this.y + this.radius > height || this.y - this.radius < 0){
                    this.dy = -this.dy;
                }
    
                this.x += this.dx
                this.y += this.dy
                this.draw()
            }
           
        }

        var circleArray = []
        for (let i = 0; i < 100; i++) {
            var x = Math.random() * width,
                y = Math.random() * height,
                dx = (Math.random() - 0.5) * 8,
                dy = (Math.random() - 0.5) * 8,
                radius = 30
                circleArray.push(new Circle(x,y, dx, dy, radius))
        }

        function animate(){
            requestAnimationFrame(animate)
            ctx.clearRect(0,0, width, height)
            
            for (let i = 0; i < circleArray.length; i++) {
                circleArray[i].update()
            }  

        }

        animate()

        parent.appendChild(canvas)
});