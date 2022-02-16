const createFooter = ()=>{
    const footer = document.querySelector('.footer')
    footer.innerHTML = ` <div class="footer-content">
    <div class="assistance">
        <h5>ASSISTANCE</h5>
        <div class="assistance-info">
            <div>
                <ul class="assistance-list">
                    <li>CONTACT US</li>
                    <li>RECALLS</li>
                    <li>MY ACCOUNT</li>
                </ul>

            </div>
            <div>
                <ul class="assistance-list">
                    <li>SUPPORT</li>
                    <li>TUTORIALS</li>
                    <li>LEARN ABOUT fashion dealers</li>
                </ul>

            </div>
        </div>

    </div>

    <div class="assistance2">
        <h5>DISCOVER</h5>
        <div class="assistance-info">
            <div>
                <ul class="assistance-list">
                    <li>NEW ARRIVALS</li>
                    <li>HIGHEST TO LOWEST PRICE</li>
                    <li>UPCOMING SEASONS</li>
                </ul>

            </div>
            <div>
                <ul class="assistance-list">
                    <li>AWARDS AND RECOGNITION</li>
                    <li>FUTURE EVENTS</li>
                    
                </ul>

            </div>
        </div>

    </div>
    
    <div >
        <!--socialnetwork-->
        <div class="title-sn">
            <h5><span class="next">Social</span> networks</h5>
        </div>
        <div class="socialNet">
            <div class="icon-socialNet">
                <i class="fab fa-twitter-square"></i><p>twitter</p>
            </div>
            <div class="icon-socialNet">
                <i class="fab fa-instagram-square"></i><p>instagram</p>
            </div>
            <div class="icon-socialNet">
                <i class="fab fa-facebook"></i><p>facebook</p>
            </div>
            <div class="icon-socialNet">
               <i class="fab fa-tiktok"></i><p>tik tok</p>
            </div>
        </div>
    </div>
   </div>`
}
createFooter()