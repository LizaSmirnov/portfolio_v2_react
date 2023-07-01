const Portfolio = () => {
    return (
        <div id='Portfolio'class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
        <a target="_blank" rel="noopener" href ="https://github.com/LizaSmirnov/professional_portfolio">
                <img src ='https://user-images.githubusercontent.com/122588135/219286287-abee4dec-8371-4cc9-ac31-ef362e2225ec.jpg' alt ='picture of rose' class="w-full" /></a>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            
            <a href="#slide6" class="btn btn-circle">❮</a> 
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
        <a target="_blank" rel="noopener" href ="https://github.com/LizaSmirnov/horiseon_refactor">
        <img src ='https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?b=1&s=170667a&w=0&k=20&c=iQE4in2blXsYoRYjoX7F8e4AFF6kOaE-TZiVNMPQ5kI=' alt ='picture of code' class="w-full" /></a>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a> 
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
        <a target="_blank" rel="noopener" href ="https://github.com/LizaSmirnov/prework_study_guide_ucberk">   
            <img src ="https://user-images.githubusercontent.com/122588135/219286301-d166c564-d381-488f-86b3-29e26ace7099.jpg" alt ='picture of rose' class="w-full" /></a>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a> 
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" class="carousel-item relative w-full">
        <a target="_blank" rel="noopener" href ="https://camerong7.github.io/Forecast_Flix/">   
            <img src ="https://user-images.githubusercontent.com/122588135/219286301-d166c564-d381-488f-86b3-29e26ace7099.jpg" alt ='picture of rose' class="w-full" /></a>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">❮</a> 
            <a href="#slide5" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" class="carousel-item relative w-full">
            <h4>Forecast_Flix</h4>
        <a target="_blank" rel="noopener" href ="https://camerong7.github.io/Forecast_Flix/">   
            <img src ="https://user-images.githubusercontent.com/122588135/219286301-d166c564-d381-488f-86b3-29e26ace7099.jpg" alt ='picture of rose' class="w-full" /></a>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">❮</a> 
            <a href="#slide6" class="btn btn-circle">❯</a>
        </div>
        </div>
            <div id="slide6" class="carousel-item relative w-full">
            <a target="_blank" rel="noopener" href ="https://camerong7.github.io/Forecast_Flix/">
            <img src ="https://user-images.githubusercontent.com/122588135/219286301-d166c564-d381-488f-86b3-29e26ace7099.jpg" alt ='picture of rose' class="w-full" /></a>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
        </div>
        </div>
      </div>
    );
    }

export default Portfolio;
