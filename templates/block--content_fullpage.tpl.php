<?php
/**
 * @file
 * Returns the HTML for a block.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728246
 */
?>
<div id="<?php print $block_html_id; ?>" class="section <?php print $title; ?> <?php print $classes; ?>"<?php print $attributes; ?> data-anchor="section<?php print $block_id; ?>" >

  <?php if ($title=="hi-neighbor"): ?>
  	<img src="/sites/default/files/images/down-arrow.png" class="down-arrow" alt="down-arrow" />
  <?php endif; ?>

  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
  <?php	$title = str_replace("-", " ", $title); ?>
  	<div class="title-stripe"></div>
    <h2<?php print $title_attributes; ?>><span>&bull;</span><?php print $title; ?><span>&bull;</span></h2>
  	<div class="title-stripe below"></div>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php print $content; ?>

</div>
