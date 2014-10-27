<?php
/**
 * @file
 * Returns the HTML for a block.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728246
 */
?>
<div id="<?php print $block_html_id; ?>" class="section section-<?php print $block_id; ?> <?php print $title; ?> <?php print $classes; ?>"<?php print $attributes; ?> data-anchor="section<?php print $block_id; ?>" >

  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
  <?php	$title = str_replace("-", " ", $title); ?>
  <?php if ($title=="hi-nieghbor"): ?>
  	<img src="/sites/default/files/images/down-arrow.png" class="down-arrow" alt="down-arrow" />
  <?php endif; ?>
  	<div class="title-stripe"></div>
    <h2<?php print $title_attributes; ?>><?php print $title; ?></h2>
  	<div class="title-stripe"></div>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php print $content; ?>

</div>
