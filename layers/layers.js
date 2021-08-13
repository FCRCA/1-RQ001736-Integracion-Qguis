var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Datosdeubicacin_2 = new ol.format.GeoJSON();
var features_Datosdeubicacin_2 = format_Datosdeubicacin_2.readFeatures(json_Datosdeubicacin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Datosdeubicacin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Datosdeubicacin_2.addFeatures(features_Datosdeubicacin_2);
var lyr_Datosdeubicacin_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Datosdeubicacin_2, 
                style: style_Datosdeubicacin_2,
                interactive: true,
                title: '<img src="styles/legend/Datosdeubicacin_2.png" /> Datos de ubicación'
            });
var format_Cercanaacomercios_3 = new ol.format.GeoJSON();
var features_Cercanaacomercios_3 = format_Cercanaacomercios_3.readFeatures(json_Cercanaacomercios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cercanaacomercios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cercanaacomercios_3.addFeatures(features_Cercanaacomercios_3);
var lyr_Cercanaacomercios_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cercanaacomercios_3, 
                style: style_Cercanaacomercios_3,
                interactive: true,
                title: '<img src="styles/legend/Cercanaacomercios_3.png" /> Cercanía a comercios'
            });
var format_Transporte_4 = new ol.format.GeoJSON();
var features_Transporte_4 = format_Transporte_4.readFeatures(json_Transporte_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transporte_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transporte_4.addFeatures(features_Transporte_4);
var lyr_Transporte_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Transporte_4, 
                style: style_Transporte_4,
                interactive: true,
                title: '<img src="styles/legend/Transporte_4.png" /> Transporte'
            });
var format_Topografa_5 = new ol.format.GeoJSON();
var features_Topografa_5 = format_Topografa_5.readFeatures(json_Topografa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Topografa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Topografa_5.addFeatures(features_Topografa_5);
var lyr_Topografa_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Topografa_5, 
                style: style_Topografa_5,
                interactive: true,
                title: '<img src="styles/legend/Topografa_5.png" /> Topografía'
            });
var format_Centrosdesalud_6 = new ol.format.GeoJSON();
var features_Centrosdesalud_6 = format_Centrosdesalud_6.readFeatures(json_Centrosdesalud_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrosdesalud_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrosdesalud_6.addFeatures(features_Centrosdesalud_6);
var lyr_Centrosdesalud_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centrosdesalud_6, 
                style: style_Centrosdesalud_6,
                interactive: true,
                title: '<img src="styles/legend/Centrosdesalud_6.png" /> Centros de salud'
            });
var format_DatosdelIPSporcantn_7 = new ol.format.GeoJSON();
var features_DatosdelIPSporcantn_7 = format_DatosdelIPSporcantn_7.readFeatures(json_DatosdelIPSporcantn_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DatosdelIPSporcantn_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DatosdelIPSporcantn_7.addFeatures(features_DatosdelIPSporcantn_7);
var lyr_DatosdelIPSporcantn_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DatosdelIPSporcantn_7, 
                style: style_DatosdelIPSporcantn_7,
                interactive: true,
                title: '<img src="styles/legend/DatosdelIPSporcantn_7.png" /> Datos del IPS por cantón'
            });
var format_reasderecreacin_8 = new ol.format.GeoJSON();
var features_reasderecreacin_8 = format_reasderecreacin_8.readFeatures(json_reasderecreacin_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasderecreacin_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasderecreacin_8.addFeatures(features_reasderecreacin_8);
var lyr_reasderecreacin_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reasderecreacin_8, 
                style: style_reasderecreacin_8,
                interactive: true,
                title: '<img src="styles/legend/reasderecreacin_8.png" /> Áreas de recreación'
            });
var format_Actividadessocioeconmicas_9 = new ol.format.GeoJSON();
var features_Actividadessocioeconmicas_9 = format_Actividadessocioeconmicas_9.readFeatures(json_Actividadessocioeconmicas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Actividadessocioeconmicas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Actividadessocioeconmicas_9.addFeatures(features_Actividadessocioeconmicas_9);
var lyr_Actividadessocioeconmicas_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Actividadessocioeconmicas_9, 
                style: style_Actividadessocioeconmicas_9,
                interactive: true,
                title: '<img src="styles/legend/Actividadessocioeconmicas_9.png" /> Actividades socioeconómicas'
            });
var format_Accesoaserviciosbsicos_10 = new ol.format.GeoJSON();
var features_Accesoaserviciosbsicos_10 = format_Accesoaserviciosbsicos_10.readFeatures(json_Accesoaserviciosbsicos_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesoaserviciosbsicos_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesoaserviciosbsicos_10.addFeatures(features_Accesoaserviciosbsicos_10);
var lyr_Accesoaserviciosbsicos_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Accesoaserviciosbsicos_10, 
                style: style_Accesoaserviciosbsicos_10,
                interactive: true,
                title: '<img src="styles/legend/Accesoaserviciosbsicos_10.png" /> Acceso a servicios básicos'
            });
var format_Educacin_11 = new ol.format.GeoJSON();
var features_Educacin_11 = format_Educacin_11.readFeatures(json_Educacin_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Educacin_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Educacin_11.addFeatures(features_Educacin_11);
var lyr_Educacin_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Educacin_11, 
                style: style_Educacin_11,
                interactive: true,
                title: '<img src="styles/legend/Educacin_11.png" /> Educación'
            });
var format_Imgenes_12 = new ol.format.GeoJSON();
var features_Imgenes_12 = format_Imgenes_12.readFeatures(json_Imgenes_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Imgenes_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Imgenes_12.addFeatures(features_Imgenes_12);
var lyr_Imgenes_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Imgenes_12, 
                style: style_Imgenes_12,
                interactive: true,
                title: '<img src="styles/legend/Imgenes_12.png" /> Imágenes'
            });
var format_Datosgeneralesdelbien_13 = new ol.format.GeoJSON();
var features_Datosgeneralesdelbien_13 = format_Datosgeneralesdelbien_13.readFeatures(json_Datosgeneralesdelbien_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Datosgeneralesdelbien_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Datosgeneralesdelbien_13.addFeatures(features_Datosgeneralesdelbien_13);
var lyr_Datosgeneralesdelbien_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Datosgeneralesdelbien_13, 
                style: style_Datosgeneralesdelbien_13,
                interactive: true,
                title: '<img src="styles/legend/Datosgeneralesdelbien_13.png" /> Datos generales del bien'
            });

lyr_GoogleEarth_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Datosdeubicacin_2.setVisible(true);lyr_Cercanaacomercios_3.setVisible(true);lyr_Transporte_4.setVisible(true);lyr_Topografa_5.setVisible(true);lyr_Centrosdesalud_6.setVisible(true);lyr_DatosdelIPSporcantn_7.setVisible(true);lyr_reasderecreacin_8.setVisible(true);lyr_Actividadessocioeconmicas_9.setVisible(true);lyr_Accesoaserviciosbsicos_10.setVisible(true);lyr_Educacin_11.setVisible(true);lyr_Imgenes_12.setVisible(true);lyr_Datosgeneralesdelbien_13.setVisible(true);
var layersList = [lyr_GoogleEarth_0,lyr_OpenStreetMap_1,lyr_Datosdeubicacin_2,lyr_Cercanaacomercios_3,lyr_Transporte_4,lyr_Topografa_5,lyr_Centrosdesalud_6,lyr_DatosdelIPSporcantn_7,lyr_reasderecreacin_8,lyr_Actividadessocioeconmicas_9,lyr_Accesoaserviciosbsicos_10,lyr_Educacin_11,lyr_Imgenes_12,lyr_Datosgeneralesdelbien_13];
lyr_Datosdeubicacin_2.set('fieldAliases', {'Consecutiv': 'Consecutiv', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Región': 'Región', 'Provincia': 'Provincia', 'Cantón': 'Cantón', 'Distrito': 'Distrito', 'Tipo.de.zo': 'Tipo.de.zo', 'Est.del.bi': 'Est.del.bi', });
lyr_Cercanaacomercios_3.set('fieldAliases', {'Consecutiv': 'Consecutiv', 'Cab.cantón': 'Cab.cantón', 'Cent.urban': 'Cent.urban', 'Supermerca': 'Supermerca', 'Pulperías': 'Pulperías', 'Plazas': 'Plazas', 'Verdulería': 'Verdulería', 'Restaurant': 'Restaurant', 'Ferreteria': 'Ferreteria', });
lyr_Transporte_4.set('fieldAliases', {'Consecutiv': 'Consecutiv', 'Tip.de.vía': 'Tip.de.vía', 'Est.de.vía': 'Est.de.vía', 'Trans.públ': 'Trans.públ', });
lyr_Topografa_5.set('fieldAliases', {'Consecutiv': 'Consecutiv', 'Topografia': 'Topografia', 'Pendiente': 'Pendiente', 'Sist.agua.': 'Sist.agua.', 'Apto.para.': 'Apto.para.', });
lyr_Centrosdesalud_6.set('fieldAliases', {'Consecutiv': 'Consecutiv', 'EBAIS': 'EBAIS', 'CAIS': 'CAIS', 'Hospital': 'Hospital', 'Ley 7600': 'Ley 7600', 'Cent.adult': 'Cent.adult', });
lyr_DatosdelIPSporcantn_7.set('fieldAliases', {'Consecutiv': 'Consecutiv', 'Canton': 'Canton', 'Población': 'Población', 'Seguridad': 'Seguridad', 'Calidad.me': 'Calidad.me', 'IPS': 'IPS', });
lyr_reasderecreacin_8.set('fieldAliases', {'Consecutiv': 'Consecutiv', 'Parques': 'Parques', 'Esp.deport': 'Esp.deport', 'Parq.infan': 'Parq.infan', });
lyr_Actividadessocioeconmicas_9.set('fieldAliases', {'Consecutiv': 'Consecutiv', 'Primarias': 'Primarias', 'Secundaria': 'Secundaria', 'Terciarias': 'Terciarias', });
lyr_Accesoaserviciosbsicos_10.set('fieldAliases', {'Consecutiv': 'Consecutiv', 'Agua': 'Agua', 'Electricid': 'Electricid', 'Internet': 'Internet', 'Alumbrado': 'Alumbrado', 'Alcantarri': 'Alcantarri', });
lyr_Educacin_11.set('fieldAliases', {'Consecutiv': 'Consecutiv', 'Guarderia': 'Guarderia', 'CENCINAI': 'CENCINAI', 'Esc.públic': 'Esc.públic', 'Esc.privad': 'Esc.privad', 'Col.públic': 'Col.públic', 'Col.privad': 'Col.privad', 'Uni.públic': 'Uni.públic', 'Uni.privad': 'Uni.privad', });
lyr_Imgenes_12.set('fieldAliases', {'Consecutiv': 'Consecutiv', 'Imagen 1': 'Imagen 1', 'Imagen 2': 'Imagen 2', 'Imagen': 'Imagen', });
lyr_Datosgeneralesdelbien_13.set('fieldAliases', {'Consecutiv': 'Consecutiv', 'Preciovent': 'Preciovent', 'Áreaconst': 'Áreaconst', 'Áreaterre': 'Áreaterre', });
lyr_Datosdeubicacin_2.set('fieldImages', {'Consecutiv': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Región': '', 'Provincia': 'TextEdit', 'Cantón': '', 'Distrito': 'TextEdit', 'Tipo.de.zo': '', 'Est.del.bi': '', });
lyr_Cercanaacomercios_3.set('fieldImages', {'Consecutiv': 'TextEdit', 'Cab.cantón': 'TextEdit', 'Cent.urban': '', 'Supermerca': 'TextEdit', 'Pulperías': 'TextEdit', 'Plazas': 'TextEdit', 'Verdulería': 'TextEdit', 'Restaurant': '', 'Ferreteria': 'TextEdit', });
lyr_Transporte_4.set('fieldImages', {'Consecutiv': 'TextEdit', 'Tip.de.vía': '', 'Est.de.vía': '', 'Trans.públ': '', });
lyr_Topografa_5.set('fieldImages', {'Consecutiv': 'TextEdit', 'Topografia': 'TextEdit', 'Pendiente': 'TextEdit', 'Sist.agua.': 'TextEdit', 'Apto.para.': 'TextEdit', });
lyr_Centrosdesalud_6.set('fieldImages', {'Consecutiv': '', 'EBAIS': '', 'CAIS': '', 'Hospital': '', 'Ley 7600': '', 'Cent.adult': '', });
lyr_DatosdelIPSporcantn_7.set('fieldImages', {'Consecutiv': 'TextEdit', 'Canton': 'TextEdit', 'Población': 'TextEdit', 'Seguridad': 'TextEdit', 'Calidad.me': '', 'IPS': '', });
lyr_reasderecreacin_8.set('fieldImages', {'Consecutiv': 'TextEdit', 'Parques': 'TextEdit', 'Esp.deport': '', 'Parq.infan': '', });
lyr_Actividadessocioeconmicas_9.set('fieldImages', {'Consecutiv': 'TextEdit', 'Primarias': 'TextEdit', 'Secundaria': 'TextEdit', 'Terciarias': 'TextEdit', });
lyr_Accesoaserviciosbsicos_10.set('fieldImages', {'Consecutiv': 'TextEdit', 'Agua': 'TextEdit', 'Electricid': '', 'Internet': 'TextEdit', 'Alumbrado': 'TextEdit', 'Alcantarri': '', });
lyr_Educacin_11.set('fieldImages', {'Consecutiv': 'TextEdit', 'Guarderia': 'TextEdit', 'CENCINAI': 'TextEdit', 'Esc.públic': 'TextEdit', 'Esc.privad': 'TextEdit', 'Col.públic': 'TextEdit', 'Col.privad': 'TextEdit', 'Uni.públic': 'TextEdit', 'Uni.privad': 'TextEdit', });
lyr_Imgenes_12.set('fieldImages', {'Consecutiv': 'TextEdit', 'Imagen 1': 'ExternalResource', 'Imagen 2': 'ExternalResource', 'Imagen': '', });
lyr_Datosgeneralesdelbien_13.set('fieldImages', {'Consecutiv': 'TextEdit', 'Preciovent': 'TextEdit', 'Áreaconst': 'TextEdit', 'Áreaterre': 'Range', });
lyr_Datosdeubicacin_2.set('fieldLabels', {'Consecutiv': 'inline label', 'Latitud': 'header label', 'Longitud': 'header label', 'Región': 'header label', 'Provincia': 'header label', 'Cantón': 'header label', 'Distrito': 'header label', 'Tipo.de.zo': 'header label', 'Est.del.bi': 'header label', });
lyr_Cercanaacomercios_3.set('fieldLabels', {'Consecutiv': 'inline label', 'Cab.cantón': 'header label', 'Cent.urban': 'header label', 'Supermerca': 'header label', 'Pulperías': 'header label', 'Plazas': 'header label', 'Verdulería': 'header label', 'Restaurant': 'header label', 'Ferreteria': 'header label', });
lyr_Transporte_4.set('fieldLabels', {'Consecutiv': 'inline label', 'Tip.de.vía': 'header label', 'Est.de.vía': 'header label', 'Trans.públ': 'header label', });
lyr_Topografa_5.set('fieldLabels', {'Consecutiv': 'inline label', 'Topografia': 'header label', 'Pendiente': 'header label', 'Sist.agua.': 'header label', 'Apto.para.': 'header label', });
lyr_Centrosdesalud_6.set('fieldLabels', {'Consecutiv': 'inline label', 'EBAIS': 'header label', 'CAIS': 'header label', 'Hospital': 'header label', 'Ley 7600': 'header label', 'Cent.adult': 'header label', });
lyr_DatosdelIPSporcantn_7.set('fieldLabels', {'Consecutiv': 'inline label', 'Canton': 'header label', 'Población': 'header label', 'Seguridad': 'header label', 'Calidad.me': 'header label', 'IPS': 'header label', });
lyr_reasderecreacin_8.set('fieldLabels', {'Consecutiv': 'inline label', 'Parques': 'header label', 'Esp.deport': 'header label', 'Parq.infan': 'header label', });
lyr_Actividadessocioeconmicas_9.set('fieldLabels', {'Consecutiv': 'inline label', 'Primarias': 'header label', 'Secundaria': 'header label', 'Terciarias': 'header label', });
lyr_Accesoaserviciosbsicos_10.set('fieldLabels', {'Consecutiv': 'inline label', 'Agua': 'header label', 'Electricid': 'header label', 'Internet': 'header label', 'Alumbrado': 'header label', 'Alcantarri': 'header label', });
lyr_Educacin_11.set('fieldLabels', {'Consecutiv': 'inline label', 'Guarderia': 'header label', 'CENCINAI': 'header label', 'Esc.públic': 'header label', 'Esc.privad': 'header label', 'Col.públic': 'header label', 'Col.privad': 'header label', 'Uni.públic': 'header label', 'Uni.privad': 'header label', });
lyr_Imgenes_12.set('fieldLabels', {'Consecutiv': 'header label', 'Imagen 1': 'no label', 'Imagen 2': 'no label', 'Imagen': 'no label', });
lyr_Datosgeneralesdelbien_13.set('fieldLabels', {'Consecutiv': 'inline label', 'Preciovent': 'header label', 'Áreaconst': 'header label', 'Áreaterre': 'header label', });
lyr_Datosgeneralesdelbien_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});