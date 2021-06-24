
// ページの読み込みを待つ
window.addEventListener('load', init);

function init() {
  // サイズを指定
  const width = 960;
  const height = 540;

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setSize(width, height);
  // 背景の色を設定
  renderer.setClearColor(0xeeeeff);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height);
  // カメラの初期座標を設定
  camera.position.set(0, 0, 1000);

  // カメラコントローラーを作成
  const controls = new THREE.OrbitControls(camera,document.body);

  // 平行光源1
  var directionalLight1 = new THREE.DirectionalLight(0xffffff);
  directionalLight1.position.set(100, 100, 100);
  // シーンに追加
  scene.add(directionalLight1);
  // 平行光源2
  var directionalLight2 = new THREE.DirectionalLight(0xffffff);
  directionalLight2.position.set(-100, 100, 100);
  // シーンに追加
  scene.add(directionalLight2);


  
  // helper
const axisHelper = new THREE.AxisHelper(400,50);
scene.add(axisHelper);
  



  // カカシをスプライトで作成
  var textureLoader = new THREE.TextureLoader();  
  var texture0 = textureLoader.load("kakasi.png");
  const material0 = new THREE.SpriteMaterial({ map: texture0,});

  const sprite0 = new THREE.Sprite(material0);
  sprite0.position.x = 0;
  sprite0.position.y = 90;
  sprite0.position.z = 0;
  sprite0.scale.set(150,230,100);
  scene.add(sprite0);

  // 麦1をスプライトで作成 
  var texture1 = textureLoader.load("mugi1.png");
  const material1 = new THREE.SpriteMaterial({ map: texture1,});

  const sprite1 = new THREE.Sprite(material1);
  sprite1.position.x = 110;
  sprite1.position.y = 50;
  sprite1.position.z = -90;
  sprite1.scale.set(50,100,50);
  scene.add(sprite1);

  // 麦2をスプライトで作成 
  var texture2 = textureLoader.load("mugi1.png");
  const material2 = new THREE.SpriteMaterial({ map: texture2,});

  const sprite2 = new THREE.Sprite(material2);
  sprite2.position.x = -130;
  sprite2.position.y = 50;
  sprite2.position.z = -120;
  sprite2.scale.set(50,100,50);
  scene.add(sprite2);
  
   // 麦束1をスプライトで作成 
  var texture3 = textureLoader.load("mugi2.png");
  const material3 = new THREE.SpriteMaterial({ map: texture3,});

  const sprite3 = new THREE.Sprite(material3);
  sprite3.position.x = 200;
  sprite3.position.y = 100;
  sprite3.position.z = 160;
  sprite3.scale.set(240,200,50);
  scene.add(sprite3);
  
   // 麦束2をスプライトで作成 
  var texture4 = textureLoader.load("mugi2.png");
  const material4 = new THREE.SpriteMaterial({ map: texture4,});

  const sprite4 = new THREE.Sprite(material4);
  sprite4.position.x = -140;
  sprite4.position.y = 100;
  sprite4.position.z = 100;
  sprite4.scale.set(240,200,50);
  scene.add(sprite4);
  
      // 地面を作成
  var texture5 = textureLoader.load("jimen.jpg");
  var planeMaterial = new THREE.MeshPhongMaterial();
  planeMaterial.map = texture5;
  
     // バンプマップ読み込み
 var bump = textureLoader.load("jimen-bump.jpg");
 planeMaterial.bumpMap = bump;
 planeMaterial.bumpscale = 1.2;
  
  var planeGeometry = new THREE.PlaneGeometry(500,500,50);
    var plane = new THREE.Mesh(planeGeometry,planeMaterial);
    plane.rotation.set( -Math.PI/2, 0, 0 );
   plane.position.set(0,0,0);
     scene.add(plane);
  

  
  // 雑草1をスプライトで作成 
  var texture6 = textureLoader.load("kusa1.png");
  const material6 = new THREE.SpriteMaterial({ map: texture6,});

  const sprite6 = new THREE.Sprite(material6);
  sprite6.position.x = 0;
  sprite6.position.y = 45;
  sprite6.position.z = -100;
  sprite6.scale.set(120,80,50);
  scene.add(sprite6);
  
   // 雑草2をスプライトで作成 
  var texture7 = textureLoader.load("kusa1.png");
  const material7 = new THREE.SpriteMaterial({ map: texture7,});

  const sprite7 = new THREE.Sprite(material7);
  sprite7.position.x = 0;
  sprite7.position.y = 45;
  sprite7.position.z = 100;
  sprite7.scale.set(120,80,50);
  scene.add(sprite7);
  
  // 麦束3をスプライトで作成 
  var texture8 = textureLoader.load("mugi2.png");
  const material8 = new THREE.SpriteMaterial({ map: texture8,});

  const sprite8 = new THREE.Sprite(material8);
  sprite8.position.x = 140;
  sprite8.position.y = 100;
  sprite8.position.z = -100;
  sprite8.scale.set(240,200,50);
  scene.add(sprite8);
  
    
  
  

  tick();
  // 毎フレーム時に実行されるループイベントです
  function tick() {
    // レンダリング
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
}
