var albums=[{title:"The White Album",band:"The Beatles",year:1968}];$(document).ready(function(){renderTable()});
function addAlbum(){var a=$("#inputAlbumTitle").val(),b=$("#inputBand").val(),c=parseInt($("#inputReleaseYear").val());$("#inputAlbumTitle").val("");$("#inputBand").val("");$("#inputReleaseYear").val("");if(""===a)addErrorBox("Album title cannot be empty!");else if(""===b)addErrorBox("Band cannot be empty!");else if(isNaN(c))addErrorBox("Release Year does not appear to be valid");else{var d={title:a,band:b,year:c};isDuplicate(d)?addErrorBox("Album is already in your collection!"):(albums.push(d),
a="<tr><td>"+albums.length+"</td><td>"+a+"</td><td>"+b+"</td><td>"+c+"</td><td><span onclick='removeItem(this)' class='pointer'>&times;</span></td></tr>",$("#albumTable").append(a))}}function saveAlbums(){var a=JSON.stringify(albums);localStorage.setItem("albums",a)}function loadAlbums(){var a=localStorage.getItem("albums");albums=JSON.parse(a);renderTable()}
function renderTable(){$("#albumTable tbody").empty();for(var a=0;a<albums.length;a++){var b="<tr><td>"+(a+1)+"</td><td>"+albums[a].title+"</td><td>"+albums[a].band+"</td><td>"+albums[a].year+"</td><td><span onclick='removeItem(this)' class='pointer'>&times;</span></td></tr>";$("#albumTable").append(b)}$("#albumTable").hide().fadeIn()}function isDuplicate(a){return-1===albums.findIndex(function(b,c,d){if(b.title===a.title&&b.band===a.band&&b.year===a.year)return!0})?!1:!0}
function removeItem(a){var b=a.parentNode.parentNode,c=b.cells[1].innerHTML,d=b.cells[2].innerHTML,e=parseInt(b.cells[3].innerHTML),b=albums.findIndex(function(a,b,f){if(a.title===c&&a.band===d&&a.year===e)return!0});-1!==b?(albums.splice(b,1),$(a).parent().parent().remove()):addErrorBox("Internal error: cannot find album!")}
function addErrorBox(a){a='<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true" style="cursor: pointer;">&times;</span><span class="sr-only">Close</span></button><strong>ERROR!</strong> '+a+"</div>";$("#errorArea").empty();$("#errorArea").append(a);$("#errorArea").hide().fadeIn("slow")};