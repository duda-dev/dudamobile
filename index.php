<?php
$dudaVersion = "1.3";
$duda_url = preg_replace('/\?.*/', '', $_SERVER['REQUEST_URI']);

function getMenuName() {global $Itemid; $name = getMenu($Itemid); $name = ereg_replace('[/ ]', "", strtolower($name)); return $name;} function getMenu($itemid) {global $db; $db = JFactory::getDBO(); $db->SetQuery( "SELECT alias FROM #__menu WHERE id='$itemid'");
return $db->loadResult();}

function urlFetch($remoteURL) {
  global $ikiosk, $database_ikiosk, $SYSTEM, $SITE, $PAGE, $APPLICATION, $USER;
  $content = file_get_contents($remoteURL);
  if ($content == "") {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $remoteURL); 
    curl_setopt($ch, CURLOPT_HEADER, 0); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $content = curl_exec($ch); 
    curl_close($ch); 
  }
   return $content; 
}

if (empty($_SESSION['jp_redirect'])) {
  $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
  if ($lang == "ja") {
    $_SESSION['jp_redirect'] = "Active";
    header("Location: http://www.dudamobile.com/jp");
    exit; 
  }
}

?>
<!doctype html>
<!--[if IE 9]><html class="no-js lt-ie10" lang="en"> <![endif]-->
<!--[if gt IE 9]><!-->
<html class="no-js" lang="en">
<!--<![endif]--> 
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?php unset($this->_scripts['/media/system/js/caption.js']); ?>
    <?php unset($this->_scripts['/media/system/js/mootools.js']); ?>

    <jdoc:include type="head" />

    <jdoc:include type="modules" name="head_ext" />

    <!-- Google Analytics -->
    <script type="text/javascript">
       //Tracking
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-7265702-1']);
      _gaq.push(['_setDomainName', 'dudamobile.com' ]); 
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
      
    </script>

    <!-- Facebook OG Tags -->
    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="http://www.dudamobile.com<?php echo str_replace('/en', "", $_SERVER['REQUEST_URI']); ?>"/>
    <meta property="og:site_name" content="Duda">
    <meta property="og:image" content="http://www.dudamobile.com/templates/duda_one/images/FBshare1200.jpg">
    <meta property="og:description" content="">

    <!-- CSS -->
    <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/duda_2014_the_empire_strikes_back/css/min/foundation.min.css?v=<?php echo $dudaVersion; ?>" />
    <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/duda_2014_the_empire_strikes_back/css/dm-font/style.css?v=<?php echo $dudaVersion; ?>" />
    <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900' rel='stylesheet' type='text/css'/>

    <!-- JS -->
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript" src="<?php echo $this->baseurl ?>/templates/duda_2014_the_empire_strikes_back/js/modernizr.js"></script>

  </head>
  <body class="page_<?php echo getMenuName();?>">
   <!-- START Top Nav for Large and Up --> 
<div class="fixed">
    <!-- START Logo Nav -->
  <nav class="top-bar show-for-large-up"> 
  <section class="top-bar-section normal-top">
    <!-- Left Nav Section -->
    <ul class="left">
      <li class="name"><h1><a href="/"><img src="/templates/img/logos/duda.png" alt="Duda"></a></h1></li>
    </ul>
    <!-- Right Nav Section -->
    <ul class="right">
      <li><a href="http://support.dudamobile.com" class="f-grey">Help</a></li>
      <li class="divider login"></li>
      <li><a href="http://my.dudamobile.com/signup" class="sign-up f-orange">Sign Up </a></li>
      <li class="divider"></li>
      <li><a href="http://my.dudamobile.com/home" class="login f-orange">Log in </a></li>
      <li class="username my-sites" style="display: none;"><a class="f-orange" href="#" data-dropdown="username-dropdown" data-options="is_hover:true"></a></li>
        <ul id="username-dropdown" class="f-dropdown" data-dropdown-content>
          <li><a href="http://my.dudamobile.com/home/dashboard?account">Account Settings</a></li>
          <li><a href="http://my.dudamobile.com/logout?next=http://www.dudamobile.com/">Sign Out</a></li>
        </ul>
      <li class="divider my-sites" style="display: none;"></li>
      <li class="my-sites" style="display: none;"><a href="http://my.dudamobile.com/home" class="mySites">My Sites</a></li>
    </ul>
  </section>
  </nav>
</div>
  <!-- END Logo Nav -->
  <!-- START Large Choice Nav -->
  <nav class="top-bar large-choice-top show-for-large-up">
    <section class="top-bar-section large-choice-top">
      <div class="row">
        <div class="small-12 small-centered">
          <ul>
            <li class="divider"></li>
              <li class="mobile">
              <a href="/" class="uppercase" data="mobile"><strong>Mobile-Only</strong></a>
              <p class="m0">I love my desktop website! Just need a mobile-friendly version of it.</p>
              <a href="/" class="arrow-slide f-blue mobile-get-started" data="mobile">Show Me </a><span class="arrow-slide f-blue mobile-get-started">&#x2192;</span>
            </li>
            <li class="divider"></li>
            <li class="one">
              <a href="/dudaone" class="uppercase" data="one"><strong>Multi-Screen</strong></a>
              <p class="m0">I want to build a new website that works on Desktop, Tablet and Mobile.</p>
              <a href="/dudaone" class="arrow-slide f-orange one-get-started" data="one">Show Me </a><span class="arrow-slide one-get-started">&#x2192;</span>
            </li>
            <li class="divider"></li>
          </ul>
          <div class="arrow-house">
            <div class="arrow-big-down absolute"><img src="/templates/img/arrows/white-triangle-down.png" alt=""></div>
          </div>
        </div>
      </div>
    </section>
  </nav>
  <!-- END Large Choice Nav --> 
  <!-- START Small  Choice and Nav -->
<div class="second-fixed">
<nav class="small-choice top-bar absolute" style="display: none;">
  <section class="top-bar-section slide-down-nav">
    <div class="row">
    <ul class="left">
      <li class="divider"></li>
      <li class="mobile"><a href="/"><h4 class="uppercase"><strong>Mobile-Only</strong></h4>Create with DudaMobile </a></li>
      <li class="divider"></li>
      <li class="one"><a href="/dudaone"><h4 class="uppercase"><strong>Multi-Screen</strong></h4>Create with DudaOne</a></li>
      <li class="divider"></li>
    </ul>
    <ul class="right uppercase">
      <li class="top-page-toggle mobile-page" style="display:none;"><a href="/templates-2">Templates</a></li>
      <li class="top-page-toggle mobile-page" style="display:none;"><a href="/features">Features</a></li>
      <li class="top-page-toggle mobile-page" style="display:none;"><a href="/plans">Plans</a></li>
      <li class="top-page-toggle partners mobile-page" style="display:none;"><a href="/dudamobile/website-design-reseller-program">Partners</a></li>
      <li class="top-page-toggle one-page" style="display:none;"><a href="/dudaone/website-templates">Templates</a></li>
      <li class="top-page-toggle one-page" style="display:none;"><a href="/dudaone/features">Features</a></li>
      <li class="top-page-toggle one-page" style="display:none;"><a href="/dudaone/plans">Plans</a></li>
      <li class="top-page-toggle partners one-page" style="display:none;"><a href="/dudaone/website-design-reseller-program">Partners</a></li>
    </ul>
    </div>
    <div class="arrow-house">
      <div class="arrow-down absolute"></div>
    </div>
  </section>
</nav>
</div>
<!-- END Black Nav -->
</div>
<!-- END Top Nav for Large and Up --> 
<!-- START Side Slide Nav for Medium and Down -->
<div class="off-canvas-wrap">
  <div class="inner-wrap">
    <nav class="tab-bar expanded hide-for-large-up" data-topbar>
      <section class="left-small">
        <a href="/"><img src="//dm-util.s3.amazonaws.com/duda_website/img/logos/duda.png" class="img-center" alt="Duda"></a>
      </section>
      <section class="middle tab-bar-section no-gutter">
        <div class="small-7 no-gutter columns"><p class="p10-0 text-center">
          <a href="/dudaone"><img src="//dm-util.s3.amazonaws.com/duda_website/img/menu/one-off.png" class="img-center" alt=""><span class="small-text uppercase"><strong>Multi-Screen</strong></span></a>
        </p></div>
        <div class="small-5 no-gutter columns">
          <p class="p10-0 text-center">
            <a href="/"><img src="//dm-util.s3.amazonaws.com/duda_website/img/menu/mobile-off.png" class="img-center" alt=""><span class="small-text uppercase"><strong>Mobile Only</strong></span></a>
          </p>
        </div>
      </section>
      <section class="right-small">
        <a class="right-off-canvas-toggle menu-icon"><span></span></a>
      </section>
    </nav>
    <aside class="right-off-canvas-menu hide-for-large-up">
      <ul class="off-canvas-list">
        <li><a href="">&nbsp;<span class="right in-menu-close"><img src="//dm-util.s3.amazonaws.com/duda_website/img/menu/close-menu.png" alt=""></span></a></li>
        <li class="uppercase"><a href="/dudaone"><strong>Multi-Screen</strong><img src="//dm-util.s3.amazonaws.com/duda_website/img/menu/one-off.png" alt="Multi-Screen" class="right"></a></li>
        <li class="uppercase"><a href="/"><strong>Mobile-Only</strong><img src="//dm-util.s3.amazonaws.com/duda_website/img/menu/mobile-off.png" alt="Mobile-Only" class="right"></a></li>
        <li><a href="/website-design-reseller-program">Partners</a></li>
        <li><a href="http://blog.dudamobile.com">Blog</a></li>
        <li><a href="/terms">Privacy and Terms</a></li>
      </ul>
    </aside>   
<!-- END Side Slide Nav for Medium and Down -->
    <section class="main-section">
          <!-- End Header -->
    <div id="content_wrapper">
        <jdoc:include type="component" />
        <?php //include ('pages/modules/mobile-plans.php'); ?>
    </div>
    <!-- Start Footer -->
        <jdoc:include type="modules" name="footer" />
    </section>
  </div>
</div>
    <!-- JS -->
    <script type="text/javascript" src="http://my.dudamobile.com/editor/scripts/jquery-cookie.js"></script>
    <script type="text/javascript" src="http://my.dudamobile.com/common/scripts/dm.trackstats.jsp"></script>
    <script type="text/javascript" src="http://my.dudamobile.com/common/scripts/dm.trackcampaigns.jsp"></script> 
    <script src="<?php echo $this->baseurl ?>/templates/duda_2014_the_empire_strikes_back/js/min/production.min.js?v=<?php echo $dudaVersion; ?>"></script>
    <script>
      $(document).foundation();
    </script>
    <!-- Google Tag Manager -->
    <script type="text/javascript">
         dataLayer = [{
              'pageTitle': 'GA Page Title',
              'utmMedium': 'UTM Medium',
              'utmSource': 'UTM Source',
              'utmCampaign': 'UTM Campaign',
              'utmContent': 'UTM Content',
              'utmKeyword': 'UTM Keyword',
              'utmEvent': 'UTM Event',
         }];
    </script>
    <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-MNXB" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MNXB');</script>
    <!-- End Google Tag Manager -->
    <!-- Marketo -->
     <script type="text/javascript">
    $.ajax({
      url: '//munchkin.marketo.net/munchkin.js',
      dataType: 'script',
      cache: true,
      success: function() {
        Munchkin.init('895-YOX-652');
      }
    });
    </script>
  </body>
</html>