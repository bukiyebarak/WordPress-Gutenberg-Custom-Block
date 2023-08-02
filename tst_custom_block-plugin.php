<?php
/**
 *Plugin Name: Tst Custom Block
 * Description: Tst Custom Block for contact information
 */

function tst_custom_block_script_register(){
	# wp-i18n internationalization is used. It will reveal languages and will work with those languages as well.
	# first "true" for version. If you do it is "true", for otomaticly update when wordpress is updated.
	# second false for subtitle.If you do it is "false", for this example it will be in the header or for true, in the footer.

	wp_enqueue_script('tst_custom_block',plugin_dir_url(__FILE__).'tst-block.js',array('wp-blocks','wp-i18n','wp-editor'),true,false);
}
add_action('enqueue_block_editor_assets','tst_custom_block_script_register');

?>