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
  const gridHelper = new THREE.GridHelper(200,50); // size, step
  scene.add(gridHelper);


  // 木をスプライトで作成
  var textureLoader = new THREE.TextureLoader();  
  var texture = textureLoader.load("img/tree0.png");
  const material = new THREE.SpriteMaterial({ map: texture,});

  const sprite = new THREE.Sprite(material);
  sprite.position.x = 0;
  sprite.position.y = 0;
  sprite.position.z = 0;
  sprite.scale.set(100,100,100);
  scene.add(sprite);

  
  // 木0テクスチャー読み込み
  var textureLoader = new THREE.TextureLoader();  
  var texture0 = textureLoader.load("img/tree0.png");
  var mat0 = new THREE.MeshLambertMaterial({transparent: true});
  mat0.map = texture0;
  // 木1テクスチャー読み込み
  var texture1 = textureLoader.load("img/tree1.png");
  var mat1 = new THREE.MeshLambertMaterial({transparent: true});
  mat1.map = texture1;
  // 木2テクスチャー読み込み
  var texture2 = textureLoader.load("img/tree2.png");
  var mat2 = new THREE.MeshLambertMaterial({transparent: true});
  mat2.map = texture2;
  // 木3テクスチャー読み込み
  var texture3 = textureLoader.load("img/tree3.png");
  var mat3 = new THREE.MeshLambertMaterial({transparent: true});
  mat3.map = texture3;
  // テクスチャー読み込み
  var textureLoader = new THREE.TextureLoader();  
  var texture = textureLoader.load("img/earth.png");
  var mat = new THREE.MeshPhongMaterial();
  mat.map = texture;


  // 木0を作成(原点に作成)
  var geometry = new THREE.PlaneGeometry(75, 100);
  var tree0 = new THREE.Mesh(geometry, mat0);
  scene.add(tree0);
  // 木1を作成(原点に作成)
  var tree1 = new THREE.Mesh(geometry, mat1);
  tree1.position.set(100, 0, 100);
  scene.add(tree1);
  // 木2を作成(原点に作成)
  var tree2 = new THREE.Mesh(geometry, mat2);
  tree2.position.set(-100, 0, 100);
  tree2.rotation.set(0,1.7,0);
  scene.add(tree2);
  // 木3を作成(原点に作成)
  var tree3 = new THREE.Mesh(geometry, mat3);
  tree3.position.set(0, 0, 200);
  tree2.rotation.set(0,1.7,0);
  scene.add(tree3);
  // 地球を作成(原点に作成)
  var geometry = new THREE.SphereGeometry(300, 30, 30);
  var earth = new THREE.Mesh(geometry, mat);
  scene.add(earth);
  // 箱を作成(原点に作成)
  var geometry = new THREE.BoxGeometry(300, 300, 300);
  var material = new THREE.MeshPhongMaterial({ color: 0x0000ff });
  var box = new THREE.Mesh(geometry, material);
  scene.add(box);

  tick();

  // 毎フレーム時に実行されるループイベントです
  function tick() {
  
  // レンダリング
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
  }

}