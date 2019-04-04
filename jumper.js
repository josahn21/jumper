function jumper() {
        this.x = 50;
        this.y = 0;
        this.gravity = 0.5; //the force of gravity;
        this.lift = -10; //opposing force
        this.velocity = 0;//speed of the gravity
        
        this.show = function() {
          fill(color('red'));
          ellipse(this.x, this.y, 50, 50);
        }
        this.up = function() {
          this.velocity += this.lift;
        }
        this.update = function() {
          this.velocity += this.gravity;
          this.y += this.velocity;
          this.velocity *= 0.9;
          if (this.y > h) {
            this.y = h;
            this.velocity = 0;
          }
          if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
          }
        }
        this.move = function() {
           if ((keyIsDown(37)) && (this.x > 0)) {
        this.x -= 20;
      }
           if ((keyIsDown(39)) && (this.x < w-50)) {
        this.x += 20;
      }
        }
      }
      
      function keyPressed() {
        if (keyCode === 32) {
          jumper.up();
        }
      }