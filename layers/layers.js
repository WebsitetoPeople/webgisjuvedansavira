var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_bangunangeojson_1 = new ol.format.GeoJSON();
var features_bangunangeojson_1 = format_bangunangeojson_1.readFeatures(json_bangunangeojson_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunangeojson_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunangeojson_1.addFeatures(features_bangunangeojson_1);
var lyr_bangunangeojson_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bangunangeojson_1, 
                style: style_bangunangeojson_1,
                interactive: true,
                title: '<img src="styles/legend/bangunangeojson_1.png" /> bangunan geojson'
            });
var format_industrigeojson_2 = new ol.format.GeoJSON();
var features_industrigeojson_2 = format_industrigeojson_2.readFeatures(json_industrigeojson_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_industrigeojson_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_industrigeojson_2.addFeatures(features_industrigeojson_2);
var lyr_industrigeojson_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_industrigeojson_2, 
                style: style_industrigeojson_2,
                interactive: true,
                title: '<img src="styles/legend/industrigeojson_2.png" /> industri geojson'
            });
var format_lahankosonggeojson_3 = new ol.format.GeoJSON();
var features_lahankosonggeojson_3 = format_lahankosonggeojson_3.readFeatures(json_lahankosonggeojson_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lahankosonggeojson_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lahankosonggeojson_3.addFeatures(features_lahankosonggeojson_3);
var lyr_lahankosonggeojson_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lahankosonggeojson_3, 
                style: style_lahankosonggeojson_3,
                interactive: true,
                title: '<img src="styles/legend/lahankosonggeojson_3.png" /> lahan kosong geojson'
            });
var format_mangrovegeojson_4 = new ol.format.GeoJSON();
var features_mangrovegeojson_4 = format_mangrovegeojson_4.readFeatures(json_mangrovegeojson_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mangrovegeojson_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mangrovegeojson_4.addFeatures(features_mangrovegeojson_4);
var lyr_mangrovegeojson_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mangrovegeojson_4, 
                style: style_mangrovegeojson_4,
                interactive: true,
                title: '<img src="styles/legend/mangrovegeojson_4.png" /> mangrove geojson'
            });
var format_Permukimanteraturgeojson_5 = new ol.format.GeoJSON();
var features_Permukimanteraturgeojson_5 = format_Permukimanteraturgeojson_5.readFeatures(json_Permukimanteraturgeojson_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Permukimanteraturgeojson_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Permukimanteraturgeojson_5.addFeatures(features_Permukimanteraturgeojson_5);
var lyr_Permukimanteraturgeojson_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Permukimanteraturgeojson_5, 
                style: style_Permukimanteraturgeojson_5,
                interactive: true,
                title: '<img src="styles/legend/Permukimanteraturgeojson_5.png" /> Permukiman teratur geojson'
            });
var format_permukimantidakteraturgeojson_6 = new ol.format.GeoJSON();
var features_permukimantidakteraturgeojson_6 = format_permukimantidakteraturgeojson_6.readFeatures(json_permukimantidakteraturgeojson_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_permukimantidakteraturgeojson_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_permukimantidakteraturgeojson_6.addFeatures(features_permukimantidakteraturgeojson_6);
var lyr_permukimantidakteraturgeojson_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_permukimantidakteraturgeojson_6, 
                style: style_permukimantidakteraturgeojson_6,
                interactive: true,
                title: '<img src="styles/legend/permukimantidakteraturgeojson_6.png" /> permukiman tidak teratur geojson'
            });
var format_sawahgeojson_7 = new ol.format.GeoJSON();
var features_sawahgeojson_7 = format_sawahgeojson_7.readFeatures(json_sawahgeojson_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawahgeojson_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawahgeojson_7.addFeatures(features_sawahgeojson_7);
var lyr_sawahgeojson_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sawahgeojson_7, 
                style: style_sawahgeojson_7,
                interactive: true,
                title: '<img src="styles/legend/sawahgeojson_7.png" /> sawah geojson'
            });
var format_Tambak_8 = new ol.format.GeoJSON();
var features_Tambak_8 = format_Tambak_8.readFeatures(json_Tambak_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambak_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambak_8.addFeatures(features_Tambak_8);
var lyr_Tambak_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tambak_8, 
                style: style_Tambak_8,
                interactive: true,
                title: '<img src="styles/legend/Tambak_8.png" /> Tambak'
            });
var format_wadukgeojson_9 = new ol.format.GeoJSON();
var features_wadukgeojson_9 = format_wadukgeojson_9.readFeatures(json_wadukgeojson_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wadukgeojson_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wadukgeojson_9.addFeatures(features_wadukgeojson_9);
var lyr_wadukgeojson_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wadukgeojson_9, 
                style: style_wadukgeojson_9,
                interactive: true,
                title: '<img src="styles/legend/wadukgeojson_9.png" /> waduk geojson'
            });
var format_PenggunaanLahan_10 = new ol.format.GeoJSON();
var features_PenggunaanLahan_10 = format_PenggunaanLahan_10.readFeatures(json_PenggunaanLahan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenggunaanLahan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenggunaanLahan_10.addFeatures(features_PenggunaanLahan_10);
var lyr_PenggunaanLahan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PenggunaanLahan_10, 
                style: style_PenggunaanLahan_10,
                interactive: true,
    title: 'Penggunaan Lahan<br />\
    <img src="styles/legend/PenggunaanLahan_10_0.png" /> bangunan geojson<br />\
    <img src="styles/legend/PenggunaanLahan_10_1.png" /> industri geojson<br />\
    <img src="styles/legend/PenggunaanLahan_10_2.png" /> lahan kosong geojson<br />\
    <img src="styles/legend/PenggunaanLahan_10_3.png" /> mangrove geojson<br />\
    <img src="styles/legend/PenggunaanLahan_10_4.png" /> Permukiman teratur geojson<br />\
    <img src="styles/legend/PenggunaanLahan_10_5.png" /> permukiman tidak teratur geojson<br />\
    <img src="styles/legend/PenggunaanLahan_10_6.png" /> sawah geojson<br />\
    <img src="styles/legend/PenggunaanLahan_10_7.png" /> Tambak<br />\
    <img src="styles/legend/PenggunaanLahan_10_8.png" /> waduk geojson<br />'
        });
var format_jalangeojson_11 = new ol.format.GeoJSON();
var features_jalangeojson_11 = format_jalangeojson_11.readFeatures(json_jalangeojson_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalangeojson_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalangeojson_11.addFeatures(features_jalangeojson_11);
var lyr_jalangeojson_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalangeojson_11, 
                style: style_jalangeojson_11,
                interactive: true,
                title: '<img src="styles/legend/jalangeojson_11.png" /> jalan geojson'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_bangunangeojson_1.setVisible(true);lyr_industrigeojson_2.setVisible(true);lyr_lahankosonggeojson_3.setVisible(true);lyr_mangrovegeojson_4.setVisible(true);lyr_Permukimanteraturgeojson_5.setVisible(true);lyr_permukimantidakteraturgeojson_6.setVisible(true);lyr_sawahgeojson_7.setVisible(true);lyr_Tambak_8.setVisible(true);lyr_wadukgeojson_9.setVisible(true);lyr_PenggunaanLahan_10.setVisible(true);lyr_jalangeojson_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_bangunangeojson_1,lyr_industrigeojson_2,lyr_lahankosonggeojson_3,lyr_mangrovegeojson_4,lyr_Permukimanteraturgeojson_5,lyr_permukimantidakteraturgeojson_6,lyr_sawahgeojson_7,lyr_Tambak_8,lyr_wadukgeojson_9,lyr_PenggunaanLahan_10,lyr_jalangeojson_11];
lyr_bangunangeojson_1.set('fieldAliases', {'id': 'id', 'Luas_ha': 'Luas_ha', });
lyr_industrigeojson_2.set('fieldAliases', {'id': 'id', 'Luas_ha': 'Luas_ha', });
lyr_lahankosonggeojson_3.set('fieldAliases', {'id': 'id', 'luas_ha': 'luas_ha', });
lyr_mangrovegeojson_4.set('fieldAliases', {'id': 'id', 'Luas_ha': 'Luas_ha', });
lyr_Permukimanteraturgeojson_5.set('fieldAliases', {'id': 'id', 'luas_ha': 'luas_ha', });
lyr_permukimantidakteraturgeojson_6.set('fieldAliases', {'id': 'id', 'Luas_ha': 'Luas_ha', });
lyr_sawahgeojson_7.set('fieldAliases', {'id': 'id', 'luas_ha': 'luas_ha', });
lyr_Tambak_8.set('fieldAliases', {'id': 'id', 'luas_ha': 'luas_ha', });
lyr_wadukgeojson_9.set('fieldAliases', {'id': 'id', 'Luas_ha': 'Luas_ha', });
lyr_PenggunaanLahan_10.set('fieldAliases', {'id': 'id', 'Luas_ha': 'Luas_ha', 'layer': 'layer', 'path': 'path', });
lyr_jalangeojson_11.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_bangunangeojson_1.set('fieldImages', {'id': '', 'Luas_ha': '', });
lyr_industrigeojson_2.set('fieldImages', {'id': '', 'Luas_ha': '', });
lyr_lahankosonggeojson_3.set('fieldImages', {'id': '', 'luas_ha': '', });
lyr_mangrovegeojson_4.set('fieldImages', {'id': '', 'Luas_ha': '', });
lyr_Permukimanteraturgeojson_5.set('fieldImages', {'id': '', 'luas_ha': '', });
lyr_permukimantidakteraturgeojson_6.set('fieldImages', {'id': '', 'Luas_ha': '', });
lyr_sawahgeojson_7.set('fieldImages', {'id': '', 'luas_ha': '', });
lyr_Tambak_8.set('fieldImages', {'id': '', 'luas_ha': '', });
lyr_wadukgeojson_9.set('fieldImages', {'id': '', 'Luas_ha': '', });
lyr_PenggunaanLahan_10.set('fieldImages', {'id': 'Range', 'Luas_ha': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_jalangeojson_11.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_bangunangeojson_1.set('fieldLabels', {'id': 'no label', 'Luas_ha': 'no label', });
lyr_industrigeojson_2.set('fieldLabels', {'id': 'no label', 'Luas_ha': 'no label', });
lyr_lahankosonggeojson_3.set('fieldLabels', {'id': 'no label', 'luas_ha': 'no label', });
lyr_mangrovegeojson_4.set('fieldLabels', {'id': 'no label', 'Luas_ha': 'no label', });
lyr_Permukimanteraturgeojson_5.set('fieldLabels', {'id': 'no label', 'luas_ha': 'no label', });
lyr_permukimantidakteraturgeojson_6.set('fieldLabels', {'id': 'no label', 'Luas_ha': 'no label', });
lyr_sawahgeojson_7.set('fieldLabels', {'id': 'no label', 'luas_ha': 'no label', });
lyr_Tambak_8.set('fieldLabels', {'id': 'no label', 'luas_ha': 'no label', });
lyr_wadukgeojson_9.set('fieldLabels', {'id': 'header label', 'Luas_ha': 'no label', });
lyr_PenggunaanLahan_10.set('fieldLabels', {'id': 'inline label', 'Luas_ha': 'inline label', 'layer': 'inline label', 'path': 'no label', });
lyr_jalangeojson_11.set('fieldLabels', {'NAMRJL': 'inline label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_jalangeojson_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});