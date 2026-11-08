import json,glob,os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
E='..'
ic={os.path.basename(f)[:-4]:open(f).read() for f in glob.glob('assets/*.svg')}
fr=''
for f in [E+'/p1/frames.js',E+'/p2/frames2.js',E+'/p3/frames3.js']:
    fr+='{\n'+open(f).read()+'\nALL.push(...FR);\n}\n'
js="const ALL=[];const WORDS="+open('words.json').read()+";\n"+open('lib.js').read()+'\n'+fr+'\n'+open('engine.js').read()
open('anim.html','w').write(open('_head.html').read()+'\n<div id="frames"></div>\n<script>window.ICONS='+json.dumps(ic)+';\n'+js+'\n</script></body></html>')
