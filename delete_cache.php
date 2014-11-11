<?php
/**
 * delete all *.log and *.sql files from the ./cache folder
 */
$thePath = './Nette.Configurator/';
echo '<br />Locating and deleting *.log and *.sql files from this folder: ' . $thePath . '<br />';
$counter = 0;
if ($theDir = @dir($thePath)) {
  while ($theFile = $theDir->read()) {
    if (is_file($thePath . $theFile)) {
      if (preg_match('/\.php$/', $theFile) > 0 || preg_match('/\.meta$/', $theFile) > 0) {
        echo '<br />Removing file: ' . $thePath . $theFile;
        unlink($thePath . $theFile);
        $counter++;
      }
    }
  }
  $theDir->close();
}
unset($theDir, $theFile);
echo ($counter == 0) ? '<br />No files found matching the criteria.' : '<br />Done';