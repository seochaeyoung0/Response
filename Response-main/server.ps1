$port = 8080
$root = "d:\SRC\Vibe\librarySite\dist"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Listening on port $port..."

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath.Replace("/", "\")
        if ($path -eq "\") { $path = "\index.html" }
        $fullPath = Join-Path $root $path

        if (Test-Path $fullPath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($fullPath)
            
            # Set basic content types
            if ($fullPath.EndsWith(".html")) { $response.ContentType = "text/html" }
            elseif ($fullPath.EndsWith(".js")) { $response.ContentType = "application/javascript" }
            elseif ($fullPath.EndsWith(".css")) { $response.ContentType = "text/css" }
            elseif ($fullPath.EndsWith(".png")) { $response.ContentType = "image/png" }
            elseif ($fullPath.EndsWith(".svg")) { $response.ContentType = "image/svg+xml" }
            
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
            $response.StatusCode = 200
        } else {
            $response.StatusCode = 404
        }
        $response.Close()
    }
} finally {
    $listener.Stop()
}
