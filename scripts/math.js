/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block id="1" type="scriptr_return" inline="false" x="15" y="116"><value name="return"><block id="2" type="math_arithmetic" inline="true"><field name="OP">MULTIPLY</field><value name="A"><block id="3" type="math_number"><field name="NUM">5</field></block></value><value name="B"><block id="4" type="math_number"><field name="NUM">6</field></block></value></block></value></block></xml>*#*#*/
return 5 * 6			