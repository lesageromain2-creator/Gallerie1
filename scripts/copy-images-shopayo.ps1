# Copie BANQUE IMAGES\shopayo -> Shopayado 2\frontend\public\images
# Shopayado 2 — Encre & Soie

$ScriptPath = if ($PSCommandPath) { $PSCommandPath } else { $MyInvocation.MyCommand.Path }
$ScriptDir = [System.IO.Path]::GetDirectoryName($ScriptPath)
$dir = $ScriptDir
while ($dir -and [System.IO.Path]::GetFileName($dir) -ne "Shopayado 2") { $dir = [System.IO.Path]::GetDirectoryName($dir) }
if (-not $dir) { Write-Error "Dossier Shopayado 2 introuvable."; exit 1 }
$Shopayado2Root = $dir
$WorkspaceRoot = [System.IO.Path]::GetDirectoryName($Shopayado2Root)
$Shopayo = Join-Path (Join-Path $WorkspaceRoot "BANQUE IMAGES") "shopayo"
$Carousel = Join-Path $Shopayo "carroussel"
$FrontendRoot = Join-Path $Shopayado2Root "frontend"
$Target = Join-Path (Join-Path $FrontendRoot "public") "images"
$TargetCarousel = Join-Path $Target "carousel"

if (-not (Test-Path $Target)) { New-Item -ItemType Directory -Path $Target -Force | Out-Null }
if (-not (Test-Path $TargetCarousel)) { New-Item -ItemType Directory -Path $TargetCarousel -Force | Out-Null }

$mapping = @(
    @{ src = "presentation .png"; dest = "hero.png" },
    @{ src = "proprietaire.png"; dest = "about.png" },
    @{ src = "dessin.png"; dest = "atelier-1.png" },
    @{ src = "dessin2.png"; dest = "atelier-2.png" },
    @{ src = "dessin3.png"; dest = "atelier-3.png" },
    @{ src = "dessin4.png"; dest = "atelier-4.png" },
    @{ src = "boutique.png"; dest = "atelier-5.png" },
    @{ pattern = "Capture*124951.png"; dest = "atelier-6.png" }
)

foreach ($m in $mapping) {
    $srcPath = $null
    if ($m.src) { $srcPath = Join-Path $Shopayo $m.src }
    elseif ($m.pattern) { $found = Get-ChildItem -Path $Shopayo -File -ErrorAction SilentlyContinue | Where-Object { $_.Name -like $m.pattern } | Select-Object -First 1; if ($found) { $srcPath = $found.FullName } }
    if ($srcPath -and (Test-Path $srcPath)) {
        Copy-Item -Path $srcPath -Destination (Join-Path $Target $m.dest) -Force
        Write-Host "Copie: $([System.IO.Path]::GetFileName($srcPath)) -> $($m.dest)"
    }
}

foreach ($m in @(
    @{ src = "mypresquile-logo.png"; dest = "mypresquile-logo.png" },
    @{ src = "mapcarta-logo.png"; dest = "mapcarta-logo.png" },
    @{ src = "google-maps-logo.png"; dest = "google-maps-logo.png" }
)) {
    $srcPath = Join-Path $Carousel $m.src
    if (Test-Path $srcPath) {
        Copy-Item -Path $srcPath -Destination (Join-Path $TargetCarousel $m.dest) -Force
        Write-Host "Carousel: $($m.dest)"
    }
}
if (Test-Path $Carousel) {
    Get-ChildItem -Path $Carousel -File -ErrorAction SilentlyContinue | ForEach-Object {
        Copy-Item -Path $_.FullName -Destination (Join-Path $TargetCarousel $_.Name) -Force
        Write-Host "Carousel: $($_.Name)"
    }
}

Write-Host "Termine. Images: $Target" -ForegroundColor Green
