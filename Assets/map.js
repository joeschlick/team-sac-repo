/*! rd_templatepackage_contrib 2020-08-07 Build: 1.7.2.1 */

"use strict";
!(function (window, document) {
  var scripts, target, strUrl, intStart;
  (window.CDC = window.CDC || {}),
    (window.CDC.Widget = window.CDC.Widget || {}),
    (window.CDC.Widget.Cache = window.CDC.Widget.Cache || []),
    (window.CDC.Widget.Loader = window.CDC.Widget.Loader || {
      config: {
        selectors: {
          injectTargets: "[data-cdc-widget]",
          widgetAttribute: "data-cdc-widget",
        },
        src: {
          jquery: "https://code.jquery.com/jquery-1.12.4.js",
          widgetPath: "/TemplatePackage/contrib/widgets/",
        },
        widgetMap: {
          cdcCharts: {
            folder: "/TemplatePackage/contrib/widgets/cdcCharts/",
            loadTarget: "iframe.html",
            title: "CDC Charts",
            type: "iframe",
            resizer: {
              autoResize: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "taggedElement",
            },
            config: { allowedHostOverrides: "*" },
            host: "www.cdc.gov",
          },
          cdcChartCreator: {
            folder: "/TemplatePackage/contrib/widgets/cdcChartCreator/",
            loadTarget: "iframe.html",
            title: "CDC Charts Creator",
            type: "iframe",
            resizer: {
              autoResize: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "taggedElement",
            },
            config: { allowedHostOverrides: "*" },
            host: "www.cdc.gov",
          },
          cdcMaps: {
            folder: "/TemplatePackage/contrib/widgets/cdcMaps/build/",
            title: "CDC Maps",
            type: "iframe",
            resizer: {
              autoResize: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "taggedElement",
            },
            config: { allowExternalCss: !0, allowedHostOverrides: "*" },
            host: "www.cdc.gov",
          },
          tpLms: {
            title: "CDC Quiz Module",
            folder: "/TemplatePackage/contrib/widgets/tp-lms/",
            type: "iframe",
            config: {
              enableRemoteHashChange: !1,
              hashOptMode: "in",
              hashUrlAppend: !0,
              allowExternalCss: !0,
              allowedHostOverrides: "*",
            },
            resizer: { enablePublicMethods: !0 },
            metrics: { mode: "module" },
            host: "www.cdc.gov",
          },
          cdcQuizWidget: {
            title: "CDC Quiz Widget",
            folder: "/TemplatePackage/contrib/widgets/tp-lms/",
            type: "iframe",
            resizer: { enablePublicMethods: !0 },
            config: { allowExternalCss: !0, allowedHostOverrides: "*" },
            host: "www.cdc.gov",
          },
          EmbeddableStorefront: {
            folder: "/widgets/storefront/",
            type: "iframe",
            loadTarget: "index.html",
            resizer: { enablePublicMethods: !0 },
            host: "www.cdc.gov",
          },
          Informational: {
            folder: "/TemplatePackage/contrib/widgets/Informational/",
            type: "iframe",
            resizer: {
              autoResize: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "min",
            },
            config: { allowExternalCss: !0 },
            host: "www.cdc.gov",
          },
          NewsAndPhotos: {
            folder: "/TemplatePackage/contrib/widgets/NewsAndPhotos/",
            title: "News And Photos",
            type: "iframe",
            resizer: {
              autoResize: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "taggedElement",
            },
            config: { allowExternalCss: !0 },
            host: "www.cdc.gov",
          },
          NewsAndPhotosMini: {
            folder: "/TemplatePackage/contrib/widgets/NewsAndPhotosMini/",
            title: "Zika",
            type: "iframe",
            resizer: {
              autoResize: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "taggedElement",
            },
            dimensions: { minWidth: "175px" },
            config: { allowExternalCss: !0 },
            host: "www.cdc.gov",
          },
          CondomFinder: {
            title: "New Condom Finder",
            resizer: {
              autoResize: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "taggedElement",
            },
            folder: "/widgets/condomfinder/",
            host: "npin.cdc.gov",
          },
          zikaRiskAssessment: {
            title: "Know Your Risk Widget",
            type: "iframe",
            resizer: {
              autoResize: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "taggedElement",
            },
            host: "www.cdc.gov",
            folder: "/zika/risk/widget/",
          },
          zikaCondomFinder: {
            title: "Zika Condom Finder",
            resizer: {
              autoResize: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "taggedElement",
            },
            host: "npin.cdc.gov",
            folder: "/widgets/zikacondomwidget/",
          },
          zikaAndPregnancy: {
            title: "Pregnancy & Zika Testing Widget",
            resizer: {
              autoResize: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "taggedElement",
            },
            host: "www.cdc.gov",
            folder: "/zika/pregnancy/widget/",
          },
          VitalSigns: {
            title: "CDC VitalSigns",
            type: "iframe",
            folder: "/TemplatePackage/contrib/widgets/NewsAndPhotos/",
            resizer: {
              autoResize: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "min",
            },
            config: { allowExternalCss: !0 },
            host: "www.cdc.gov",
          },
          VideoPlayer: {
            folder: "/TemplatePackage/contrib/widgets/VideoPlayer/",
            type: "iframe",
            loadTarget: "iframe.html",
            dimensions: { minWidth: "320px" },
            host: "www.cdc.gov",
          },
          oadcPrevention: {
            folder: "/widgets/oadcPrevention/",
            dimensions: { width: "196px", height: "300px" },
            host: "tools.cdc.gov",
          },
          FluView: {
            folder: "/widgets/flu/FluView/",
            type: "iframe",
            loadTarget: "iframe.html",
            dimensions: { maxWidth: "622px" },
            host: "www.cdc.gov",
          },
          FluVaccination: {
            folder: "/widgets/FluVaccination/",
            type: "iframe",
            loadTarget: "iframe.html",
            dimensions: { width: "230px", height: "383px" },
            host: "www.cdc.gov",
          },
          DataMaps: {
            folder: "/TemplatePackage/contrib/widgets/DataMaps/",
            type: "iframe",
            loadTarget: "iframe.html",
            external: !0,
            host: "www.cdc.gov",
          },
          syndicationIframe: {
            folder: "/TemplatePackage/contrib/widgets/tp-syndication/",
            type: "iframe",
            loadTarget: "index.html",
            host: "www.cdc.gov",
          },
          tpSyndication: {
            folder: "/TemplatePackage/contrib/widgets/tp-syndication/",
            type: "iframe",
            loadTarget: "index.html",
            host: "www.cdc.gov",
          },
          micrositeCollectionViewer: {
            folder: "/widgets/micrositeCollectionViewer/",
            type: "iframe",
            loadTarget: "index.html",
            config: {
              enableRemoteHashChange: !0,
              hashOptMode: "out",
              hashUrlAppend: !0,
            },
            resizer: { enablePublicMethods: !0 },
            host: "www.cdc.gov",
          },
          micrositeCollectionViewerMed: {
            type: "iframe",
            loadTarget: "index.html",
            config: {
              enableRemoteHashChange: !0,
              hashOptMode: "out",
              hashUrlAppend: !0,
            },
            resizer: { enablePublicMethods: !0 },
            host: "www.cdc.gov",
            folder: "/widgets/micrositeCollectionViewerMed/",
          },
          micrositeConcussion: {
            folder: "/widgets/micrositeConcussion/",
            type: "iframe",
            loadTarget: "index.html",
            config: {
              enableRemoteHashChange: !0,
              hashOptMode: "out",
              hashUrlAppend: !0,
            },
            resizer: { enablePublicMethods: !0 },
            host: "www.cdc.gov",
          },
          micrositeHealthWellness: {
            folder: "/widgets/micrositeHealthWellness/",
            type: "iframe",
            loadTarget: "index.html",
            config: {
              enableRemoteHashChange: !0,
              hashOptMode: "out",
              hashUrlAppend: !0,
            },
            resizer: { enablePublicMethods: !0 },
            host: "www.cdc.gov",
          },
          EmbeddableStorefrontHHS: {
            folder: "/widgets/storefront_hhs/",
            type: "iframe",
            loadTarget: "index.html",
            external: !1,
            resizer: { enablePublicMethods: !1 },
            host: "www.cdc.gov",
          },
          imageShare: {
            folder: "/TemplatePackage/contrib/widgets/imageShare/",
            title: "CDC Image Share Widget",
            config: { allowedHostOverrides: "*" },
            host: "tools.cdc.gov",
          },
          howHealthyIsYourState: {
            folder: "/nccdphp/dch/multimedia/widgets/brfss-update/",
            title: "How Healthy Is Your State?",
            type: "iframe",
            loadTarget: "index.html",
            dimensions: { height: "600px" },
            host: "www.cdc.gov",
          },
          diabetesRiskTest: {
            folder: "/widgets/KnowYourScore/html5/",
            type: "iframe",
            loadTarget: "iframe.html",
            dimensions: { width: "170px", height: "382px" },
            host: "tools.cdc.gov",
          },
          getTested: {
            title: "Get Tested",
            dimensions: { minWidth: "284px", height: "300px" },
            host: "www.cdc.gov",
            folder: "/hiv/widgets/cdc-npin-gettested/",
          },
          actAgainstAidsLocatorSpanish: {
            title: "Spanish Act Against AIDS Locator",
            dimensions: { minWidth: "284px", height: "300px" },
            host: "www.cdc.gov",
            folder: "/hiv/widgets/cdc-spanish-aaa/",
          },
          actAgainstAIDS: {
            title: "Act Against AIDS",
            dimensions: { minWidth: "284px", height: "300px" },
            host: "www.cdc.gov",
            folder: "/hiv/widgets/cdc-aaa/",
          },
          doingIt: {
            title: "Doing It",
            dimensions: { minWidth: "284px", height: "300px" },
            host: "www.cdc.gov",
            folder: "/hiv/widgets/cdc-doingit/",
          },
          doingItSpanish: {
            title: "Doing It Spanish",
            loadTarget: "cdc-spanish-doingit.html",
            dimensions: { minWidth: "284px", height: "300px" },
            host: "www.cdc.gov",
            folder: "/hiv/widgets/doingit//",
          },
          PACT: {
            title: "PACT",
            dimensions: { minWidth: "284px", height: "300px" },
            host: "www.cdc.gov",
            folder: "/hiv/widgets/cdc-pact/",
          },
          BurnLearn: {
            folder: "/widgets/DCH/BurnLearn/burnLearn/",
            dimensions: { width: "170px", height: "350px" },
            host: "www.cdc.gov",
          },
          GoLight: {
            folder: "/widgets/DCH/GoLight/",
            dimensions: { width: "170px", height: "350px" },
            host: "www.cdc.gov",
          },
          ScaleBack: {
            folder: "/widgets/DCH/ScaleBack/",
            loadTarget: "animjQuery.html",
            dimensions: { width: "170px", height: "350px" },
            host: "www.cdc.gov",
          },
          sampleIframe: {
            folder: "/TemplatePackage/contrib/widgets/sampleIframe/",
            host: "www.cdc.gov",
          },
          CountyMaps: {
            folder: "/TemplatePackage/contrib/widgets/CountyMaps/",
            loadTarget: "iframe.html",
            host: "www.cdc.gov",
          },
          CountyMapsTemplate: {
            folder: "/TemplatePackage/contrib/widgets/CountyMaps/",
            loadTarget: "iframe.html",
            host: "www.cdc.gov",
          },
          MVPICCS: {
            folder: "/TemplatePackage/contrib/widgets/MVPICCS/",
            loadTarget: "iframe.html",
            dimensions: {
              minWidth: "300px",
              maxWidth: "500px",
              height: "630px",
            },
            host: "www.cdc.gov",
          },
          "500Cities": {
            folder: "/500Cities/widget/",
            loadTarget: "index.html",
            dimensions: {
              minWidth: "355px",
              maxWidth: "575px",
              height: "446px",
            },
            host: "www.cdc.gov",
          },
          hereMaps: {
            folder: "/TemplatePackage/contrib/widgets/hereMaps/",
            loadTarget: "index.html",
            dimensions: { height: "450px" },
            host: "www.cdc.gov",
          },
          GrandRounds: {
            folder: "/TemplatePackage/contrib/widgets/grandrounds/",
            type: "injection",
            loadTarget: "index.html",
            external: !1,
            host: "www.cdc.gov",
          },
          healthBot: {
            folder:
              "/TemplatePackage/contrib/widgets/healthBot/covid19/syndicate/",
            type: "injection",
            loadTarget: "widget.min.js",
            host: "www.cdc.gov",
          },
          extinguishToolWidget: {
            folder: "/tobacco/campaign/tips/partners/hud/ex-widget/",
            loadTarget: "extinguish-map.html",
            host: "tools.cdc.gov",
          },
          HCSOPrEPLocator: {
            title: "HCSO PrEP Locator",
            resizer: {
              autoResize: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "taggedElement",
            },
            folder: "/widgets/Hcso-Prep/hcso-preplocator-widget/",
            host: "npin.cdc.gov",
          },
          DHAPPrEPLocator: {
            title: "DHAP PrEP Locator",
            resizer: {
              autoResize: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "taggedElement",
            },
            folder: "/widgets/DHAP-Prep/dhap-preplocator-widget/",
            host: "npin.cdc.gov",
          },
          "AAA-PrEPLocator": {
            title: "AAA PrEP Locator",
            resizer: {
              autoResize: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "taggedElement",
            },
            folder: "/widgets/AAA-Prep/aaa-preplocator-widget/",
            host: "npin.cdc.gov",
          },
          "StartTalking-PrEPLocator": {
            title: "StartTalking PrEP Locator",
            resizer: {
              autoResize: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "taggedElement",
            },
            folder:
              "/widgets/StartTalking-prep/starttalking-preplocator-widget/",
            host: "npin.cdc.gov",
          },
          DynWidgets: {
            title: "Dynamic Widgets",
            folder: "/DynWidgets/",
            host: "npin.cdc.gov",
          },
          DynGetTested: {
            title: "Dynamic GetTested Widgets",
            folder: "/DynGetTested/",
            host: "npin.cdc.gov",
          },
          DynCombinedWidgets: {
            title: "Dynamic Combined Widgets",
            folder: "/DynCombinedWidgets/",
            resizer: { autoResize: !1, enablePublicMethods: !0 },
            host: "npin.cdc.gov",
          },
          NPIN_GetTested: {
            title: "NPIN GetTested Widget",
            folder: "/widgets/NPIN_GetTested/",
            host: "npin.cdc.gov",
          },
          "mini-GetTested": {
            title: "GetTested Mini Widget",
            folder: "/widgets/mini-GetTested/",
            host: "npin.cdc.gov",
          },
          childTeenBMI: {
            title: "BMI Calculator for Child and Teen",
            loadTarget: "calculator.html",
            folder: "/healthyweight/bmi/widget/",
            host: "www.cdc.gov",
          },
          FoodRecall: {
            folder: "/foodsafety/recalls/",
            title: "Food Recall Widget",
            type: "iframe",
            resizer: {
              autoResize: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "taggedElement",
            },
            config: { allowExternalCss: !0 },
            host: "www.cdc.gov",
          },
          endHIVcountymaps: {
            folder: "/endhiv/widget/",
            title: "End HIV Map",
            type: "iframe",
            resizer: { enablePublicMethods: !0 },
            host: "www.cdc.gov",
          },
        },
        widgetDefaults: {
          type: "iframe",
          title: "CDC Widget Container Frame",
          dimensions: { width: "100%", height: "100%" },
          loadTarget: "index.html",
          metrics: { mode: "widget", pageName: "", channel: "" },
          config: {
            enableRemoteHashChange: !1,
            hashOptMode: "in",
            hashUrlAppend: !1,
            allowExternalCss: !1,
          },
          resizer: {
            enablePublicMethods: !1,
            interval: 32,
            resizeFrom: "parent",
          },
        },
        logLevel: 0,
      },
      log: function (anyArg) {
        return (
          widgetLoader.config.logLevel &&
            "object" == typeof window.console &&
            window.console.log(anyArg),
          0 < widgetLoader.config.logLevel
        );
      },
      replaceAll: function (find, replace, str) {
        return (
          (find =
            "|" === find ? new RegExp("\\|", "g") : new RegExp(find, "g")),
          str.replace(find, replace)
        );
      },
      cleanString: function (anyString) {
        return (
          (anyString = anyString || ""),
          "string" != typeof cleanString && (anyString = anyString.toString()),
          (anyString = widgetLoader.replaceAll("\t", "", anyString)),
          (anyString = widgetLoader.replaceAll("\r", "", anyString)),
          widgetLoader.replaceAll("\n", "", anyString)
        );
      },
      attachMessageHandler: function () {
        var messageMethods = { attach: "attachEvent", listen: "onmessage" };
        window.addEventListener &&
          ((messageMethods.attach = "addEventListener"),
          (messageMethods.listen = "message")),
          window[messageMethods.attach](messageMethods.listen, function (
            event
          ) {
            window.CDC.Widget.Loader.messageReceiver(event.data);
          });
      },
      messageSender: function (strFrameId, objData) {
        var frame = document.getElementById(strFrameId);
        ((objData = objData || {}).to = strFrameId),
          widgetLoader.log("** Sending message to " + objData.to + " **"),
          widgetLoader.log(objData),
          frame.contentWindow.postMessage("objData", "*");
      },
      loadScript: function (script, callback) {
        var eleScript = document.createElement("script"),
          eleHead = document.getElementsByTagName("head")[0];
        if (void 0 !== script && 0 < script.length) {
          eleScript.src = script;
          var fctLocalCallback = function () {
            window.CDC.Widget.Loader.log("Loading script: " + script),
              void 0 !== callback
                ? (window.CDC.Widget.Loader.log(
                    "Executing Callback: " + script
                  ),
                  callback())
                : window.CDC.Widget.Loader.log(
                    "No Callback Provided for: " + script
                  );
          };
          eleScript.addEventListener
            ? eleScript.addEventListener("load", fctLocalCallback, !1)
            : eleScript.readyState &&
              (eleScript.onreadystatechange = fctLocalCallback);
          try {
            eleHead.appendChild(eleScript);
          } catch (objError) {
            window.CDC.Widget.Loader.log("Error Loading " + script),
              window.CDC.Widget.Loader.log(objError.message);
          }
        }
      },
      getWidgetConfig: function (lowerWidgetName) {
        var key,
          objLowerCaseMap = {};
        for (key in widgetLoader.config.widgetMap)
          objLowerCaseMap[key.toLowerCase()] = key;
        if (
          ((lowerWidgetName = (lowerWidgetName || "").toLowerCase()),
          objLowerCaseMap.hasOwnProperty(lowerWidgetName))
        ) {
          var widgetName = objLowerCaseMap[lowerWidgetName];
          return widgetLoader.config.widgetMap[widgetName];
        }
        return !1;
      },
      loadWidget: function (widgetName, jqElement) {
        var widgetOverrides, widgetConfig, objCallerData;
        if (
          (widgetOverrides = window.CDC.Widget.Loader.getWidgetConfig(
            widgetName
          ))
        ) {
          switch (
            (((widgetConfig = cdcJquery.extend(
              !0,
              {},
              widgetLoader.config.widgetDefaults,
              widgetOverrides
            )).dimensions.width =
              jqElement.attr("data-widget-width") ||
              widgetConfig.dimensions.width),
            (widgetConfig.dimensions.height =
              jqElement.attr("data-widget-height") ||
              widgetConfig.dimensions.height),
            (widgetConfig.dimensions.maxWidth =
              jqElement.attr("data-widget-max-width") ||
              widgetConfig.dimensions.maxWidth),
            (widgetConfig.dimensions.maxHeight =
              jqElement.attr("data-widget-max-height") ||
              widgetConfig.dimensions.maxHeight),
            (widgetConfig.folder =
              jqElement.attr("data-widget-folder") ||
              widgetConfig.folder ||
              jqElement.attr("data-cdc-widget")),
            (widgetConfig.type =
              jqElement.attr("data-widget-type") || widgetConfig.type),
            (widgetConfig.title =
              jqElement.attr("data-widget-title") ||
              jqElement.attr("data-title") ||
              widgetConfig.title),
            (widgetConfig.loadTarget =
              jqElement.attr("data-widget-load-target") ||
              widgetConfig.loadTarget),
            (widgetConfig.scrolling =
              jqElement.attr("data-widget-scrolling") || !1),
            (widgetConfig.resizer = widgetConfig.resizer || {}),
            (widgetConfig.scrolling = "true" === widgetConfig.scrolling),
            (widgetConfig.widgetName = widgetName),
            (widgetLoader.runtime.widgetCount += 1),
            (objCallerData = widgetLoader.getCallerData(
              widgetConfig,
              jqElement
            )),
            (widgetConfig.windowId =
              widgetConfig.widgetName + widgetLoader.runtime.widgetCount),
            (objCallerData.wid = widgetConfig.windowId),
            widgetLoader.log("Caller Data"),
            widgetLoader.log(objCallerData),
            widgetConfig.type.toLowerCase())
          ) {
            case "iframe":
              (widgetConfig.loadTarget =
                widgetConfig.loadTarget || "index.html"),
                (widgetConfig.loadHandler =
                  widgetConfig.loadHandler ||
                  function (widgetLoader, widgetCfg, jqElement) {
                    var jqIframe,
                      strSrc,
                      aryCallParams = [];
                    for (var key in objCallerData)
                      aryCallParams.push(key + "=" + objCallerData[key]);
                    widgetConfig.config.enableRemoteHashChange &&
                      aryCallParams.push(
                        "chashOptMode=" + widgetConfig.config.hashOptMode
                      ),
                      (strSrc =
                        window.location.protocol +
                        "//" +
                        widgetCfg.loadPath +
                        widgetCfg.loadTarget +
                        "?" +
                        aryCallParams.join("&")),
                      widgetConfig.config.enableRemoteHashChange &&
                        widgetConfig.config.hashUrlAppend &&
                        ((void 0 !== objCallerData.rhEnable &&
                          "true" != objCallerData.rhEnable) ||
                          (strSrc += document.location.hash)),
                      (jqIframe = widgetLoader.jQuery(
                        '<iframe frameborder="0" src="' + strSrc + '"></iframe>'
                      )).attr("id", widgetConfig.windowId),
                      jqIframe.attr("name", widgetConfig.windowId),
                      jqIframe.attr("style", "border: none;"),
                      jqIframe.attr("title", widgetConfig.windowId),
                      jqIframe.attr("width", widgetConfig.dimensions.width),
                      jqIframe.attr("height", widgetConfig.dimensions.height),
                      jqIframe.attr("allowFullScreen", "true"),
                      jqIframe.attr("webkitallowfullscreen", "true"),
                      jqIframe.attr(
                        "scrolling",
                        !0 === widgetConfig.scrolling ? "yes" : "no"
                      );
                    var objTmp = {
                      isOldIE: -1 !== navigator.userAgent.indexOf("MSIE"),
                      autoWidth: "100%" == widgetConfig.dimensions.width,
                      autoHeight: "100%" == widgetConfig.dimensions.height,
                    };
                    objTmp.autoResize = objTmp.autoWidth || objTmp.autoHeight;
                    var objResizeOptions = {
                      autoResize: objTmp.autoResize,
                      checkOrigin: !1,
                      enableInPageLinks: !1,
                      enablePublicMethods:
                        widgetConfig.resizer.enablePublicMethods,
                      heightCalculationMethod:
                        widgetConfig.resizer.heightCalculationMethod ||
                        objTmp.isOldIE
                          ? "max"
                          : "lowestElement",
                      interval: widgetConfig.resizer.interval,
                      resizeFrom: widgetConfig.resizer.resizeFrom,
                      scrolling:
                        !objTmp.autoResize || !0 === widgetConfig.scrolling,
                    };
                    objTmp.autoWidth || (objResizeOptions.sizeWidth = !1),
                      objTmp.autoHeight || (objResizeOptions.sizeHeight = !1),
                      widgetConfig.resizer &&
                        widgetConfig.resizer.hasOwnProperty("autoResize") &&
                        (objResizeOptions.autoResize =
                          widgetConfig.resizer.autoResize),
                      widgetConfig.dimensions.maxWidth &&
                        (objResizeOptions.maxWidth = widgetConfig.dimensions.maxWidth.replace(
                          "px",
                          ""
                        )),
                      widgetConfig.dimensions.maxHeight &&
                        (objResizeOptions.maxHeight = widgetConfig.dimensions.maxHeight.replace(
                          "px",
                          ""
                        )),
                      jqIframe.load(function () {
                        widgetLoader.messageSender(widgetConfig.windowId, {
                          event: "handshake",
                          runtime: widgetLoader.runtime,
                        });
                      }),
                      jqElement.append(jqIframe),
                      jqIframe.iFrameResize(objResizeOptions),
                      jqElement.addClass("cdc-widget-wrapper");
                  });
              break;
            case "injection":
              widgetConfig.loadHandler =
                widgetConfig.loadHandler ||
                function (widgetLoader, widgetCfg, jqElement) {
                  (widgetConfig.loadTarget = widgetConfig.loadTarget
                    ? window.location.protocol +
                      "//" +
                      widgetConfig.loadPath +
                      widgetConfig.loadTarget
                    : "widget.js"),
                    widgetLoader.loadScript(
                      widgetConfig.loadTarget,
                      function () {}
                    );
                };
          }
          if (void 0 !== widgetConfig.loadTarget) {
            var strTargetHost;
            if (
              widgetConfig.hasOwnProperty("config") &&
              widgetConfig.config.hasOwnProperty("allowedHostOverrides") &&
              widgetConfig.config.allowedHostOverrides.length
            ) {
              var requestedHost = jqElement.attr("data-host") || !1;
              ((Boolean(requestedHost) &&
                "*" === widgetConfig.config.allowedHostOverrides &&
                Boolean(requestedHost.search) &&
                -1 < requestedHost.search("cdc.gov")) ||
                (Boolean(requestedHost) &&
                  -1 <
                    widgetConfig.config.allowedHostOverrides.indexOf(
                      requestedHost
                    ))) &&
                (strTargetHost = requestedHost);
            }
            (strTargetHost = strTargetHost || widgetConfig.host),
              (widgetConfig.loadPath = strTargetHost + widgetConfig.folder),
              widgetConfig.loadHandler(widgetLoader, widgetConfig, jqElement),
              window.CDC.Widget.Cache.push(widgetConfig);
          }
        } else
          console.warn("No widget found with the name " + widgetName),
            jqElement.hide();
      },
      attrToCamelCase: function (strAttribute) {
        var arySource,
          strCurr,
          i,
          aryDestination = [];
        for (
          arySource = strAttribute.toLowerCase().split("-"), i = 0;
          i < arySource.length;
          i++
        )
          (strCurr = arySource[i]),
            0 < i &&
              (strCurr =
                strCurr.charAt(0).toUpperCase() + strCurr.substring(1)),
            aryDestination.push(strCurr);
        return aryDestination.join("");
      },
      getCallerData: function (widgetConfig, jqElement) {
        var keySrc, keyDest, objOmit, objReturn, eElement, i, attrib;
        if (
          ((eElement =
            !!(jqElement && jqElement.length && 0 < jqElement.length) &&
            jqElement[0]),
          widgetConfig.parameters,
          (objReturn = {
            chost: location.host,
            cpath: location.pathname,
            csearch:
              encodeURIComponent(document.location.search.replace("?", "")) ||
              "",
            chash:
              encodeURIComponent(document.location.hash.replace("#", "")) || "",
            ctitle:
              encodeURIComponent(
                window.CDC.Widget.Loader.replaceAll("#", "", document.title)
              ) || "",
            wn: widgetConfig.widgetName,
            wf: widgetConfig.folder,
            wid: widgetConfig.windowId,
            mMode: widgetConfig.metrics.mode,
            mPage: widgetConfig.metrics.pageName,
            mChannel: widgetConfig.metrics.channel,
          }),
          (objOmit = {
            cdcWidget: !0,
            widgetFolder: !0,
            stylePath: widgetConfig.allowExternalCss || !1,
          }),
          eElement)
        )
          for (i = 0; i < eElement.attributes.length; i++)
            (attrib = eElement.attributes[i]).specified &&
              attrib.value &&
              0 < attrib.value.length &&
              ((keySrc = attrib.name),
              !0 !==
                objOmit[
                  (keyDest = widgetLoader.attrToCamelCase(
                    keySrc.replace(/^data-/gi, "")
                  ))
                ] && (objReturn[keyDest] = attrib.value));
        return objReturn;
      },
      getConfigFromCache: function (windowId) {
        var objCfg,
          length = window.CDC.Widget.Cache.length;
        if (length--)
          return ((objCfg =
            window.CDC.Widget.Cache[length]).windowId = windowId)
            ? objCfg
            : null;
      },
      init: function (blnForce) {
        if (
          (Array.prototype.forEach ||
            (Array.prototype.forEach = function (fun) {
              if (null == this || "function" != typeof fun)
                throw new TypeError();
              for (
                var t = Object(this),
                  len = t.length >>> 0,
                  thisArg = 2 <= arguments.length ? arguments[1] : void 0,
                  i = 0;
                i < len;
                i++
              )
                i in t && fun.call(thisArg, t[i], i, t);
            }),
          widgetLoader.log("Widget System Init Requested..."),
          !widgetLoader.runtime.initialized)
        ) {
          (widgetLoader.jQuery = window.cdcJquery),
            widgetLoader.iFrameResizer(widgetLoader.jQuery),
            (widgetLoader.runtime.initialized = !0),
            widgetLoader.log("Widget System Initializing...");
          var jqInjectTargets = widgetLoader.jQuery(
            widgetLoader.config.selectors.injectTargets
          );
          widgetLoader.log(jqInjectTargets.length + " widget(s) requested"),
            jqInjectTargets.each(function () {
              var jqInjectTarget, strWidget;
              if (
                ((strWidget =
                  (jqInjectTarget = cdcJquery(this)).attr(
                    widgetLoader.config.selectors.widgetAttribute
                  ) || "no_widget_attribute_found"),
                void 0 === jqInjectTarget.data("tp-widget-loaded"))
              ) {
                if (
                  (jqInjectTarget.data("tp-widget-loaded", !0),
                  "micrositeCollectionViewer" === strWidget &&
                    "403305" === jqInjectTarget.attr("data-cdc-collectionid"))
                )
                  switch (
                    ((strWidget = "micrositeCollectionViewerMed"),
                    jqInjectTarget.attr("data-cdc-dataid", "404908"),
                    jqInjectTarget.attr("data-cdc-theme"))
                  ) {
                    case "theme-blue":
                      jqInjectTarget.attr("data-cdc-theme", "theme1");
                      break;
                    case "theme-teal":
                      jqInjectTarget.attr("data-cdc-theme", "theme2");
                      break;
                    case "theme-orange":
                      jqInjectTarget.attr("data-cdc-theme", "theme3");
                      break;
                    case "theme-green":
                      jqInjectTarget.attr("data-cdc-theme", "theme4");
                      break;
                    case "theme-pink":
                      jqInjectTarget.attr("data-cdc-theme", "theme5");
                      break;
                    case "theme-slate":
                      jqInjectTarget.attr("data-cdc-theme", "theme6");
                      break;
                    case "theme-purple":
                      jqInjectTarget.attr("data-cdc-theme", "theme7");
                      break;
                    case "theme-red":
                      jqInjectTarget.attr("data-cdc-theme", "theme8");
                      break;
                    case "theme-cyan":
                      jqInjectTarget.attr("data-cdc-theme", "theme9");
                  }
                widgetLoader.log("Loading requested widget: " + strWidget),
                  widgetLoader.loadWidget(strWidget, jqInjectTarget);
              }
            }),
            widgetLoader.jQuery(window).trigger("resize");
        }
      },
      iFrameResizer: function () {
        var count = 0,
          firstRun = !0,
          logEnabled = !1,
          msgHeaderLen = "message".length,
          msgId = "[iFrameSizer]",
          msgIdLen = msgId.length,
          pagePosition = null,
          requestAnimationFrame = window.requestAnimationFrame,
          resetRequiredMethods = {
            max: 1,
            scroll: 1,
            bodyScroll: 1,
            documentElementScroll: 1,
          },
          settings = {},
          timer = null,
          defaults = {
            autoResize: !0,
            bodyBackground: null,
            bodyMargin: null,
            bodyMarginV1: 8,
            bodyPadding: null,
            checkOrigin: !0,
            enableInPageLinks: !1,
            enablePublicMethods: !1,
            heightCalculationMethod: "offset",
            interval: 32,
            log: !1,
            maxHeight: 1 / 0,
            maxWidth: 1 / 0,
            minHeight: 0,
            minWidth: 0,
            resizeFrom: "parent",
            scrolling: !1,
            sizeHeight: !0,
            sizeWidth: !1,
            tolerance: 0,
            closedCallback: function () {},
            initCallback: function () {},
            messageCallback: function () {},
            resizedCallback: function () {},
            scrollCallback: function () {
              return !0;
            },
          };
        function addEventListener(obj, evt, func) {
          "addEventListener" in window
            ? obj.addEventListener(evt, func, !1)
            : "attachEvent" in window && obj.attachEvent("on" + evt, func);
        }
        function formatLogMsg(msg) {
          return (
            msgId +
            "[" +
            ((retStr = "Host page"),
            window.top !== window.self &&
              (retStr = window.parentIFrame
                ? window.parentIFrame.getId()
                : "Nested host page"),
            retStr) +
            "]" +
            msg
          );
          var retStr;
        }
        function log(msg) {
          logEnabled &&
            "object" == typeof window.console &&
            console.log(formatLogMsg(msg));
        }
        function warn(msg) {
          "object" == typeof window.console && console.warn(formatLogMsg(msg));
        }
        function getPagePosition() {
          null === pagePosition &&
            log(
              " Get page position: " +
                (pagePosition = {
                  x:
                    void 0 !== window.pageXOffset
                      ? window.pageXOffset
                      : document.documentElement.scrollLeft,
                  y:
                    void 0 !== window.pageYOffset
                      ? window.pageYOffset
                      : document.documentElement.scrollTop,
                }).x +
                "," +
                pagePosition.y
            );
        }
        function setPagePosition() {
          null !== pagePosition &&
            (window.scrollTo(pagePosition.x, pagePosition.y),
            log(" Set page position: " + pagePosition.x + "," + pagePosition.y),
            (pagePosition = null));
        }
        function resetIFrame(messageData) {
          log(
            " Size reset requested by " +
              ("init" === messageData.type ? "host page" : "iFrame")
          ),
            getPagePosition(),
            syncResize(
              function () {
                setSize(messageData),
                  trigger("reset", "reset", messageData.iframe, messageData.id);
              },
              messageData,
              "init"
            );
        }
        function setSize(messageData) {
          function setDimension(dimension) {
            (messageData.iframe.style[dimension] =
              messageData[dimension] + "px"),
              log(
                " IFrame (" +
                  iframeID +
                  ") " +
                  dimension +
                  " set to " +
                  messageData[dimension] +
                  "px"
              );
          }
          var iframeID = messageData.iframe.id;
          settings[iframeID].sizeHeight && setDimension("height"),
            settings[iframeID].sizeWidth && setDimension("width");
        }
        function syncResize(func, messageData, doNotSync) {
          doNotSync !== messageData.type && requestAnimationFrame
            ? (log(" Requesting animation frame"), requestAnimationFrame(func))
            : func();
        }
        function trigger(calleeMsg, msg, iframe, id) {
          iframe && iframe.contentWindow
            ? (log("[" + calleeMsg + "] Sending msg to iframe (" + msg + ")"),
              iframe.contentWindow.postMessage(msgId + msg, "*"))
            : (warn("[" + calleeMsg + "] IFrame not found"),
              settings[id] && delete settings[id]);
        }
        function setupIFrame(options) {
          var msg,
            iframe = this,
            iframeID = (function (iframeID) {
              return (
                "" === iframeID &&
                  ((iframe.id = iframeID = "iFrameResizer" + count++),
                  (logEnabled = (options || {}).log),
                  log(
                    " Added missing iframe ID: " +
                      iframeID +
                      " (" +
                      iframe.src +
                      ")"
                  )),
                iframeID
              );
            })(iframe.id);
          function addStyle(style) {
            1 / 0 !== settings[iframeID][style] &&
              0 !== settings[iframeID][style] &&
              ((iframe.style[style] = settings[iframeID][style] + "px"),
              log(" Set " + style + " = " + settings[iframeID][style] + "px"));
          }
          !(function (options) {
            for (var option in ((options = options || {}),
            (settings[iframeID] = {}),
            (function (options) {
              if ("object" != typeof options)
                throw new TypeError("Options is not an object.");
            })(options),
            defaults))
              defaults.hasOwnProperty(option) &&
                (settings[iframeID][option] = options.hasOwnProperty(option)
                  ? options[option]
                  : defaults[option]);
            logEnabled = settings[iframeID].log;
          })(options),
            log(
              " IFrame scrolling " +
                (settings[iframeID].scrolling ? "enabled" : "disabled") +
                " for " +
                iframeID
            ),
            (iframe.style.overflow =
              !1 === settings[iframeID].scrolling ? "hidden" : "auto"),
            (iframe.scrolling =
              !1 === settings[iframeID].scrolling ? "no" : "yes"),
            addStyle("maxHeight"),
            addStyle("minHeight"),
            addStyle("maxWidth"),
            addStyle("minWidth"),
            ("number" != typeof settings[iframeID].bodyMargin &&
              "0" !== settings[iframeID].bodyMargin) ||
              ((settings[iframeID].bodyMarginV1 =
                settings[iframeID].bodyMargin),
              (settings[iframeID].bodyMargin =
                String(settings[iframeID].bodyMargin) + "px")),
            (msg =
              iframeID +
              ":" +
              settings[iframeID].bodyMarginV1 +
              ":" +
              settings[iframeID].sizeWidth +
              ":" +
              settings[iframeID].log +
              ":" +
              settings[iframeID].interval +
              ":" +
              settings[iframeID].enablePublicMethods +
              ":" +
              settings[iframeID].autoResize +
              ":" +
              settings[iframeID].bodyMargin +
              ":" +
              settings[iframeID].heightCalculationMethod +
              ":" +
              settings[iframeID].bodyBackground +
              ":" +
              settings[iframeID].bodyPadding +
              ":" +
              settings[iframeID].tolerance +
              ":" +
              settings[iframeID].enableInPageLinks +
              ":" +
              settings[iframeID].resizeFrom),
            addEventListener(iframe, "load", function () {
              var fr = firstRun;
              trigger("iFrame.onload", msg, iframe),
                !fr &&
                  settings[iframeID].heightCalculationMethod in
                    resetRequiredMethods &&
                  resetIFrame({
                    iframe: iframe,
                    height: 0,
                    width: 0,
                    type: "init",
                  });
            }),
            trigger("init", msg, iframe);
        }
        function throttle(fn, time) {
          null === timer &&
            (timer = setTimeout(function () {
              (timer = null), fn();
            }, time));
        }
        function getWinStatus() {
          return {
            width: window.outerWidth,
            height: window.outerHeight,
            orientation:
              window.outerWidth >= window.outerHeight
                ? "landscape"
                : "portrait",
          };
        }
        function factory() {
          function init(element, options) {
            if (!element.tagName)
              throw new TypeError("Object is not a valid DOM element");
            if ("IFRAME" !== element.tagName.toUpperCase())
              throw new TypeError(
                "Expected <IFRAME> tag, found <" + element.tagName + ">."
              );
            setupIFrame.call(element, options);
          }
          return function (options, target) {
            switch (typeof target) {
              case "undefined":
              case "string":
                Array.prototype.forEach.call(
                  document.querySelectorAll(target || "iframe"),
                  function (element) {
                    init(element, options);
                  }
                );
                break;
              case "object":
                init(target, options);
                break;
              default:
                throw new TypeError(
                  "Unexpected data type (" + typeof target + ")."
                );
            }
          };
        }
        !(function () {
          var x,
            vendors = ["moz", "webkit", "o", "ms"];
          for (x = 0; x < vendors.length && !requestAnimationFrame; x += 1)
            requestAnimationFrame =
              window[vendors[x] + "RequestAnimationFrame"];
          requestAnimationFrame || log(" RequestAnimationFrame not supported");
        })(),
          addEventListener(window, "message", function (event) {
            function resizeIFrame() {
              ensureInRange("Height"),
                ensureInRange("Width"),
                syncResize(
                  function () {
                    setSize(messageData),
                      setPagePosition(),
                      settings[iframeID].resizedCallback(messageData);
                  },
                  messageData,
                  "resetPage"
                );
            }
            function ensureInRange(Dimension) {
              var max = Number(settings[iframeID]["max" + Dimension]),
                min = Number(settings[iframeID]["min" + Dimension]),
                dimension = Dimension.toLowerCase(),
                size = Number(messageData[dimension]);
              if (max < min)
                throw new Error(
                  "Value for min" +
                    Dimension +
                    " can not be greater than max" +
                    Dimension
                );
              log(" Checking " + dimension + " is in range " + min + "-" + max),
                size < min &&
                  ((size = min), log(" Set " + dimension + " to min value")),
                max < size &&
                  ((size = max), log(" Set " + dimension + " to max value")),
                (messageData[dimension] = String(size));
            }
            function getMsgBody(offset) {
              return msg.substr(msg.indexOf(":") + msgHeaderLen + offset);
            }
            function getElementPosition(target) {
              var iFramePosition = target.getBoundingClientRect();
              return (
                getPagePosition(),
                {
                  x:
                    parseInt(iFramePosition.left, 10) +
                    parseInt(pagePosition.x, 10),
                  y:
                    parseInt(iFramePosition.top, 10) +
                    parseInt(pagePosition.y, 10),
                }
              );
            }
            function scrollRequestFromChild(addOffset) {
              var offset = addOffset
                  ? getElementPosition(messageData.iframe)
                  : { x: 0, y: 0 },
                newPosition = {
                  x: Number(messageData.width) + offset.x,
                  y: Number(messageData.height) + offset.y,
                };
              log(
                " Reposition requested from iFrame (offset x:" +
                  offset.x +
                  " y:" +
                  offset.y +
                  ")"
              ),
                window.top !== window.self
                  ? window.parentIFrame
                    ? addOffset
                      ? parentIFrame.scrollToOffset(
                          newPosition.x,
                          newPosition.y
                        )
                      : parentIFrame.scrollTo(
                          messageData.width,
                          messageData.height
                        )
                    : warn(
                        " Unable to scroll to requested position, window.parentIFrame not found"
                      )
                  : ((pagePosition = newPosition), scrollTo(), log(" --"));
            }
            function scrollTo() {
              !1 !== settings[iframeID].scrollCallback(pagePosition) &&
                setPagePosition();
            }
            var retCode,
              data,
              msg = event.data,
              messageData = {},
              iframeID = null;
            msgId === String(msg).substr(0, msgIdLen) &&
              ((data = msg.substr(msgIdLen).split(":")),
              (messageData = {
                iframe: document.getElementById(data[0]),
                id: data[0],
                height: data[1],
                width: data[2],
                type: data[3],
              }),
              (iframeID = messageData.id),
              (logEnabled =
                settings && settings[iframeID] && settings[iframeID].log),
              (retCode = messageData.type in { true: 1, false: 1 }) &&
                log(" Ignoring init message from meta parent page"),
              !retCode &&
                (function () {
                  if (null !== messageData.iframe) return 1;
                  warn(" IFrame (" + messageData.id + ") not found");
                })() &&
                (function () {
                  var origin = event.origin,
                    remoteHost = messageData.iframe.src
                      .split("/")
                      .slice(0, 3)
                      .join("/");
                  if (
                    settings[iframeID].checkOrigin &&
                    "null" !== String(origin) &&
                    origin !== remoteHost
                  )
                    throw new Error(
                      "Unexpected message received from: " +
                        origin +
                        " for " +
                        messageData.iframe.id +
                        ". Message was: " +
                        event.data +
                        ". This error can be disabled by adding the checkOrigin: false option."
                    );
                  return 1;
                })() &&
                ((function () {
                  switch (messageData.type) {
                    case "close":
                      !(function (iframe) {
                        var iframeID = iframe.id;
                        log(" Removing iFrame: " + iframeID),
                          iframe.parentNode.removeChild(iframe),
                          settings[iframeID].closedCallback(iframeID),
                          delete settings[iframeID],
                          log(" --");
                      })(messageData.iframe);
                      break;
                    case "message":
                      (msgBody = getMsgBody(6)),
                        settings[iframeID].messageCallback({
                          iframe: messageData.iframe,
                          message: JSON.parse(msgBody),
                        });
                      break;
                    case "hashchange":
                      (objMessageData = {
                        id: messageData.id,
                        hash: getMsgBody(9),
                      }),
                        (objWidgetCfg = widgetLoader.getConfigFromCache(
                          objMessageData.id
                        )) &&
                          objWidgetCfg.windowId &&
                          objWidgetCfg.windowId == objMessageData.id &&
                          (objWidgetCfg.config.enableRemoteHashChange
                            ? (objMessageData.hash.replace("#", ""),
                              (window.location.hash = objMessageData.hash))
                            : console &&
                              console.error &&
                              console.error(
                                "Hash Change of parent window requested, but blocked by widget security settings"
                              ));
                      break;
                    case "scrollTo":
                      scrollRequestFromChild(!1);
                      break;
                    case "scrollToOffset":
                      scrollRequestFromChild(!0);
                      break;
                    case "inPageLink":
                      (location = getMsgBody(9)),
                        (hash = location.split("#")[1] || ""),
                        (hashData = decodeURIComponent(hash)),
                        (target =
                          document.getElementById(hashData) ||
                          document.getElementsByName(hashData)[0]),
                        window.top !== window.self
                          ? window.parentIFrame
                            ? parentIFrame.moveToAnchor(hash)
                            : log(
                                " In page link #" +
                                  hash +
                                  " not found and window.parentIFrame not found"
                              )
                          : target
                          ? (function (target) {
                              var jumpPosition = getElementPosition(target);
                              log(
                                " Moving to in page link (#" +
                                  hash +
                                  ") at x: " +
                                  jumpPosition.x +
                                  " y: " +
                                  jumpPosition.y
                              ),
                                (pagePosition = {
                                  x: jumpPosition.x,
                                  y: jumpPosition.y,
                                }),
                                scrollTo(),
                                log(" --");
                            })(target)
                          : log(" In page link #" + hash + " not found");
                      break;
                    case "reset":
                      resetIFrame(messageData);
                      break;
                    case "init":
                      resizeIFrame(),
                        settings[iframeID].initCallback(messageData.iframe);
                      break;
                    default:
                      resizeIFrame();
                  }
                  var location,
                    hash,
                    hashData,
                    target,
                    objMessageData,
                    objWidgetCfg,
                    msgBody;
                })(),
                (firstRun = !1)));
          }),
          addEventListener(window, "resize", function () {
            if (!lastDims) var lastDims = getWinStatus();
            window.setTimeout(function () {
              var currDims = getWinStatus();
              (lastDims.width == currDims.width &&
                lastDims.height == currDims.height &&
                lastDims.orientation == currDims.orientation) ||
                ((lastDims = getWinStatus()),
                throttle(function () {
                  for (var iframeId in settings)
                    "parent" === settings[iframeId].resizeFrom &&
                      trigger(
                        "Window resize",
                        "resize",
                        document.getElementById(iframeId),
                        iframeId
                      );
                }, 66));
            }, 75);
          }),
          addEventListener(window, "orientationchange", function () {
            window.setTimeout(function () {
              throttle(function () {
                for (var iframeId in settings)
                  "parent" === settings[iframeId].resizeFrom &&
                    trigger(
                      "Window resize",
                      "resize",
                      document.getElementById(iframeId),
                      iframeId
                    );
              }, 66);
            }, 75);
          }),
          widgetLoader.jQuery &&
            (widgetLoader.jQuery,
            (widgetLoader.jQuery.fn.iFrameResize = function (options) {
              return this.filter("iframe")
                .each(function (index, element) {
                  setupIFrame.call(element, options);
                })
                .end();
            })),
          "function" == typeof define && define.amd
            ? define([], factory)
            : "object" == typeof module && "object" == typeof module.exports
            ? (module.exports = factory())
            : (window.iFrameResize = factory());
      },
      runtime: {
        widgetCount: 0,
        intervals: {},
        initialized: !1,
        widgetHost:
          (target = (scripts = document.getElementsByTagName("script"))[
            scripts.length - 1
          ]) && target.getAttribute("src")
            ? (-1 ==
                (strUrl =
                  -1 <
                  (intStart = (strUrl = target.getAttribute("src")).search(
                    "//"
                  ))
                    ? ((strUrl = strUrl.substring(intStart + 2, strUrl.length)),
                      window.location.protocol + "//" + strUrl.split("/")[0])
                    : window.location.protocol + "//" + location.host).indexOf(
                  "cdc.gov"
                ) && (strUrl = window.location.protocol + "//tools.cdc.gov"),
              strUrl)
            : window.location.protocol + "//tools.cdc.gov",
      },
    });
  var widgetLoader = window.CDC.Widget.Loader;
  void 0 === window.widgetLoaderInitFlag &&
    ((window.widgetLoaderInitFlag = !0),
    widgetLoader.runtime.widgetHost
      ? void 0 === window.cdcJquery
        ? ((window.cdcJquery = !1),
          widgetLoader.loadScript(
            widgetLoader.runtime.widgetHost + widgetLoader.config.src.jquery,
            function () {
              (window.cdcJquery = jQuery.noConflict(!0)),
                window.cdcJquery(function () {
                  0 === window.cdcJquery(".tp-widget-delay-init").length
                    ? widgetLoader.init()
                    : console.log(
                        "Widget Initialization Halted, an element with the class .tp-widget-delay-init was found; awaiting manual call of init"
                      );
                });
            }
          ))
        : console.warn(
            "Widget framework was initilaized more than once, for proper performace, and to avoid issues, please ensure you are not including the widget loader more than once."
          )
      : widgetLoader.log(
          "Unable to resolve script host - widget injection aborted!"
        ));
})(window, document);
