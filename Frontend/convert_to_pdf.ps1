$path = "c:\Users\siva7\OneDrive\Desktop\nscetweb1\nscetweb\Frontend\src\pages\Academics\AcademicCalender\images"
try {
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    Write-Host "Word application started"
    $files = Get-ChildItem -Path $path -Include *.doc, *.docx -Recurse
    foreach ($file in $files) {
        Write-Host "Converting: $($file.Name)"
        $doc = $word.Documents.Open($file.FullName)
        $pdfPath = "$($file.DirectoryName)\$($file.BaseName).pdf"
        $doc.SaveAs([ref]$pdfPath, [ref]17)
        $doc.Close()
        Write-Host "Successfully created: $pdfPath"
    }
} catch {
    Write-Host "Error converting files: $_"
} finally {
    if ($word) {
        $word.Quit()
        [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
    }
}
