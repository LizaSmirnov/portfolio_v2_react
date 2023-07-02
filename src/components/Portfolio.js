const Portfolio = () => {
    return (
        <div class='card-item h-full'>
          <h2 className="portfolio rounded-box">Portfolio</h2>
          
      <div class="h-96 carousel carousel-vertical rounded-box">
      <div class="carousel-item h-full">
          <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/professional_portfolio">
              <div class="image-container">
                  <img src="https://user-images.githubusercontent.com/122588135/219286287-abee4dec-8371-4cc9-ac31-ef362e2225ec.jpg" alt="picture of rose" class="w-full" />
                  <div class="hover-text">Proffessional Portfolio Version 1</div>
            </div>
          </a>
      </div> 
      <div class="carousel-item h-full">
        <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/horiseon_refactor">
              <div class="image-container">
                  <img src="https://user-images.githubusercontent.com/122588135/219286287-abee4dec-8371-4cc9-ac31-ef362e2225ec.jpg" alt="picture of rose" class="w-full" />
                  <div class="hover-text">Horiseon Refactor(HTML & CSS)</div>
              </div>
          </a>
        </div> 
        <div class="carousel-item h-full">
        <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/prework_study_guide_ucberk">
              <div class="image-container">
                  <img src="https://user-images.githubusercontent.com/122588135/219286287-abee4dec-8371-4cc9-ac31-ef362e2225ec.jpg" alt="picture of rose" class="w-full" />
                  <div class="hover-text">PreWork Study Guide(HTML&CSS&JS)</div>
              </div>
          </a>
        </div> 
        <div class="carousel-item h-full">
        <a target="_blank" rel="noopener" href="https://camerong7.github.io/Forecast_Flix/">
              <div class="image-container">
                  <img src="https://user-images.githubusercontent.com/122588135/219286287-abee4dec-8371-4cc9-ac31-ef362e2225ec.jpg" alt="picture of rose" class="w-full" />
                  <div class="hover-text">Forecast_Flix(API)</div>
              </div>
          </a>
        </div>
        <div class="carousel-item h-full">
            <a target="_blank" rel="noopener" href="https://sheltered-reef-22263.herokuapp.com/home">
              <div class="image-container w-full">
                  <img src="https://user-images.githubusercontent.com/122588135/219286287-abee4dec-8371-4cc9-ac31-ef362e2225ec.jpg" alt="picture of rose" class="w-full" />
                  <div class="hover-text">Reel Reviews</div>
              </div>
          </a>
        </div>
        <div class="carousel-item h-1/2">
            <a target="_blank" rel="noopener" href="https://github.com/LizaSmirnov/ecommerce_backend/blob/main/README.md">
              <div class="image-container">
                  <img src="https://user-images.githubusercontent.com/122588135/219286287-abee4dec-8371-4cc9-ac31-ef362e2225ec.jpg" alt="picture of rose" class="w-full" />
                  <div class="hover-text">Ecommerce Backend</div>
              </div>
          </a>
        </div>
      </div>
      
      <div class="card w-96 glass">
      <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
      <div class="card-body">
        <h2 class="card-title">My Resumer</h2>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Download for Viewing</button>
        </div>
      </div>
    </div>
    </div>
      

    );
    }

export default Portfolio;
