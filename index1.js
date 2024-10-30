<!DOCTYPE html>
<html>
	<head>
		  <meta charset="utf-8">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
	</head>
	<body>
	</body>
	  <script>
        // 动态创建 script 标签
        var script = document.createElement('script');
        // 生成当前时间戳
        var timestamp = new Date().getTime();
        // 设置带时间戳的 JavaScript 文件 URL
        script.src = "./index1.js?" + timestamp;

        // 将 script 标签插入到页面中
        document.body.appendChild(script);
    </script>
</html>