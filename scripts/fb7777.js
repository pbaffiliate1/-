/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 

/*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block id="1" type="scriptr_return" inline="false" x="34" y="2"><value name="return"><block id="2" type="scriptr_fb_post" inline="true"><value name="message"><block id="39" type="text"><field name="TEXT">Testing the Facebook Blockly block from scriptr.io</field></block></value></block></value></block></xml>*#*#*/
return facebookPost ('Testing the Facebook Blockly block from scriptr.io'); 		   
	