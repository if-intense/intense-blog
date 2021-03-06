<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css">


    <!-- google-font KLEE-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Klee+One&display=swap" rel="stylesheet">
    <!-- font-awesome -->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!-- <link rel="stylesheet" type="text/css" href="css/nav.css" /> -->
    <link rel="stylesheet" type="text/css" href="css/index.css" />
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
</head>
<body>
    <div id="wrapper">
        
            <?php echo $nav; ?>
        
        <div class="jumbotron box">
            <div class="title-box">
                <h1>株式会社インテンス<br><span>新美容情報・コラム一覧</span></h1>
            </div>
        </div>
        <div class="container-fluid main-area box p-0">
            <div class="left">
                <div class="productSelect col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-8 offset-2">
                    <p>メーカー一覧</p>
                    <select id="choose-from" onchange="sortCategory();">
                        <option disabled="disabled" selected>記事一覧</option>
                    </select>
                </div>
                <div class="inner">
                    <p id="alert">記事一覧</p>
                    <div id="list" class="row">
                    </div>
                    <div id="listing">
                        <ul class="list-articles"></ul>
                        <div class="tabs">
                            <div class="first">最初</div>
                            <div class="previous">
                                <i class="fas fa-angle-double-left"></i>
                                <!-- Previous -->
                            </div>
                            <div class="next">
                                <i class="fas fa-angle-double-right"></i>
                                <!-- Next -->
                            </div>
                            <div class="last">最後</div>
                        </div>
                    </div>
                    <div id="refresh" style="display: none;">
                        <a onclick="resetArticles()">全ての記事</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="company-info-footer">
            <p class="mt-2">SNSのサイトもフォローしてください！</p>
            <!-- <p class="social-media">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-line"></i></a>
            </p> -->
            <ul>
                <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#" class="instagram"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#" class="line"><i class="fab fa-line"></i></a></li>
            </ul>
            <h3 class="text-center my-3"><img src="images/intense-logo.svg" alt="株式会社インテンス" height="24"></h3>
            <div class="intense-info">
                
                <p class="mb-0">東京営業所<br><i class="fas fa-tenge"></i> 104-0061<br>
                    東京都中央区銀座6-10-1 <br>GINZA SIX 11F</p>
            </div>

        </div>



        <div class="footer box">
            <div class="container">
                <p class="text-center">All Rights Reserved &copy; INTENSE Co., Ltd 2021</p>
            </div>
        </div>
    </div>
    <script src="js/getarticle.js"></script>
    <script src="js/categorizeArticle.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>

</body>

</html>