<!doctype>
<html>
  <head>
    <title>Hello, PHP</title>

    <?php require './head.php' ?>

  </head>
  <body>
    <div class="container jumbotron">
      <?php echo "<h1>Hello, PHP.</h1>" ?>
      <?php print_r($_GET) ?>
      <?php echo "<h2>" . $_GET['name'] . "</h2>" ?>
      <?php echo "<h2>" . $_GET['email'] . "</h2>" ?>
    </div>
  </body>
</html>

