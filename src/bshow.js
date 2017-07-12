(function ($, enginename) {
    var bshow = window[enginename] = {};
    bshow.init = function (conf, parent) {
        //首先分析布局依赖,找到最优依赖
        bshow.orderPanels(conf);
        //开始进行布局
        bshow.layoutPanels((!parent) ? document.body : parent, conf.body);
    }
    bshow.layoutPanels = function (parent, arr) {
        for (var div in arr) {
            div = arr[div];
            var _div = $("<div/>").appendTo($(parent));
            _div.css("position", "absolute");
            _div.attr("id", div.id)
            _div.css("z-index", div.zIndex)
            _div.css("top", div.top)
            _div.css("left", div.left)
            _div.css("bottom", div.bottom)
            _div.css("right", div.right)
            _div.css("height", div.height)
            _div.css("width", div.width)
            _div.css("opacity", div.opacity);
            if (div.style) {
                _div.css(div.style);
            }

            //设置上下左右的咬合目标元素
            if (div.topLink) {
                var links = div.topLink.split(",");
                if (links.length > 0) {
                    for (var index = 0; index < links.length; index++) {
                        var arrTmp = links[index].split(" ");
                        if (arrTmp.length > 1) {
                            if ($("#" + arrTmp[0]).length > 0) {
                                _div.css("top", parseFloat($("#" + arrTmp[0]).offset().top) + parseFloat($("#" + arrTmp[0]).height()) + parseFloat(arrTmp[1]));
                                //绑定事件
                                $("#" + arrTmp[0]).bind("ontop onheight", {
                                    customer: _div,
                                    customer_conf: div
                                }, function (evt, srv) {
                                    evt.data.customer.css("top", parseFloat(srv.source.offset().top) + parseFloat(srv.source.height()) + parseFloat(arrTmp[1]));
                                    //触发事件
                                    evt.data.customer.trigger("ontop", {
                                        source: evt.data.customer,
                                        source_conf: evt.data.customer_conf
                                    });
                                });
                                break;
                            }

                        } else if (arr.length > 0) {
                            if ($("#" + arrTmp[0]).length > 0) {
                                _div.css("top", parseFloat($("#" + arrTmp[0]).offset().top) + parseFloat($("#" + arrTmp[0]).height()));
                                //绑定事件
                                $("#" + arrTmp[0]).bind("ontop onheight", {
                                    customer: _div,
                                    customer_conf: div
                                }, function (evt, srv) {
                                    evt.data.customer.css("top", parseFloat(srv.source.offset().top) + parseFloat(srv.source.height()));
                                    //触发事件
                                    evt.data.customer.trigger("ontop", {
                                        source: evt.data.customer,
                                        source_conf: evt.data.customer_conf
                                    });
                                });
                                break;
                            }
                        }
                    }
                }
            }
            if (div.leftLink) {
                var links = div.leftLink.split(",");
                if (links.length > 0) {
                    for (var index = 0; index < links.length; index++) {
                        var arrTmp = links[index].split(" ");
                        if (arrTmp.length > 1) {
                            if ($("#" + arrTmp[0]).length > 0) {
                                _div.css("left", parseFloat($("#" + arrTmp[0]).offset().left) + parseFloat($("#" + arrTmp[0]).width()) + parseFloat(arrTmp[1]));
                                //绑定事件
                                $("#" + arrTmp[0]).bind("onleft onwidth", {
                                    customer: _div,
                                    customer_conf: div
                                }, function (evt, srv) {
                                    evt.data.customer.css("left", parseFloat(srv.source.offset().left) + parseFloat(srv.source.width()) + parseFloat(arrTmp[1]));
                                    //触发事件
                                    evt.data.customer.trigger("onleft", {
                                        source: evt.data.customer,
                                        source_conf: evt.data.customer_conf
                                    });
                                });
                                break;
                            }

                        } else if (arr.length > 0) {
                            if ($("#" + arrTmp[0]).length > 0) {
                                _div.css("left", parseFloat($("#" + arrTmp[0]).offset().left) + parseFloat($("#" + arrTmp[0]).width()));
                                //绑定事件
                                $("#" + arrTmp[0]).bind("onleft onwidth", {
                                    customer: _div,
                                    customer_conf: div
                                }, function (evt, srv) {
                                    evt.data.customer.css("left", parseFloat(srv.source.offset().left) + parseFloat(srv.source.width()));
                                    //触发事件
                                    evt.data.customer.trigger("onleft", {
                                        source: evt.data.customer,
                                        source_conf: evt.data.customer_conf
                                    });
                                });
                                break;
                            }
                        }
                    }
                }
            }
            if (div.rightLink) {
                var links = div.rightLink.split(",");
                if (links.length > 0) {
                    for (var index = 0; index < links.length; index++) {
                        var arrTmp = links[index].split(" ");
                        if (arrTmp.length > 1) {
                            if ($("#" + arrTmp[0]).length > 0) {
                                _div.css("right", $(parent).width() - $("#" + arrTmp[0]).offset().left + parseFloat(arrTmp[1]));
                                //绑定事件
                                $("#" + arrTmp[0]).bind("onright onwidth", {
                                    customer: _div,
                                    customer_conf: div
                                }, function (evt, srv) {
                                    evt.data.customer.css("right", $(parent).width() - srv.source.offset().left + parseFloat(arrTmp[1]));
                                    //触发事件
                                    evt.data.customer.trigger("onright", {
                                        source: evt.data.customer,
                                        source_conf: evt.data.customer_conf
                                    });
                                });
                                break;
                            }

                        } else if (arr.length > 0) {
                            if ($("#" + arrTmp[0]).length > 0) {
                                _div.css("right", $(parent).width() - $("#" + arrTmp[0]).offset().left);
                                //绑定事件
                                $("#" + arrTmp[0]).bind("onright onwidth", {
                                    customer: _div,
                                    customer_conf: div
                                }, function (evt, srv) {
                                    evt.data.customer.css("right", $(parent).width() - srv.source.offset().left);
                                    //触发事件
                                    evt.data.customer.trigger("onright", {
                                        source: evt.data.customer,
                                        source_conf: evt.data.customer_conf
                                    });
                                });
                                break;
                            }
                        }
                    }
                }
            }
            if (div.bottomLink) {
                var links = div.bottomLink.split(",");
                if (links.length > 0) {
                    for (var index = 0; index < links.length; index++) {
                        var arrTmp = links[index].split(" ");
                        if (arrTmp.length > 1) {
                            if ($("#" + arrTmp[0]).length > 0) {
                                _div.css("bottom", $(parent).height() - $("#" + arrTmp[0]).offset().top + parseFloat(arrTmp[1]));
                                //绑定事件
                                $("#" + arrTmp[0]).bind("onbottom onheight", {
                                    customer: _div,
                                    customer_conf: div
                                }, function (evt, srv) {
                                    evt.data.customer.css("bottom", $(parent).height() - srv.source.offset().top + parseFloat(arrTmp[1]));
                                    //触发事件
                                    evt.data.customer.trigger("onbottom", {
                                        source: evt.data.customer,
                                        source_conf: evt.data.customer_conf
                                    });
                                });
                                break;
                            }

                        } else if (arr.length > 0) {
                            if ($("#" + arrTmp[0]).length > 0) {
                                _div.css("bottom", $(parent).height() - $("#" + arrTmp[0]).offset().top);
                                //绑定事件
                                $("#" + arrTmp[0]).bind("onbottom onheight", {
                                    customer: _div,
                                    customer_conf: div
                                }, function (evt, srv) {
                                    evt.data.customer.css("bottom", $(parent).height() - srv.source.offset().top);
                                    //触发事件
                                    evt.data.customer.trigger("onbottom", {
                                        source: evt.data.customer,
                                        source_conf: evt.data.customer_conf
                                    });
                                });
                                break;
                            }
                        }
                    }
                }
            }

            //设置尺寸位置的参照对象
            if (div.topUse) {
                _div.css("top", $("#" + div.topUse).offset().top);
                //绑定事件
                $("#" + div.topUse).bind("ontop", {customer: _div, customer_conf: div}, function (evt, srv) {
                    evt.data.customer.css("top", srv.source.offset().top);
                    //触发事件
                    evt.data.customer.trigger("ontop", {
                        source: evt.data.customer,
                        source_conf: evt.data.customer_conf
                    });
                });
            }
            if (div.leftUse) {
                _div.css("left", $("#" + div.leftUse).offset().left);
                //绑定事件
                $("#" + div.leftUse).bind("onleft", {customer: _div, customer_conf: div}, function (evt, srv) {
                    evt.data.customer.css("left", srv.source.offset().left);
                    //触发事件
                    evt.data.customer.trigger("onleft", {
                        source: evt.data.customer,
                        source_conf: evt.data.customer_conf
                    });
                });
            }
            if (div.widthUse) {
                _div.width($("#" + div.widthUse).width());
                //绑定事件
                $("#" + div.widthUse).bind("onwidth", {customer: _div, customer_conf: div}, function (evt, srv) {
                    evt.data.customer.width(srv.source.width());
                    //触发事件
                    evt.data.customer.trigger("onwidth", {
                        source: evt.data.customer,
                        source_conf: evt.data.customer_conf
                    });
                });
            }
            if (div.heightUse) {
                _div.height($("#" + div.heightUse).height());
                //绑定事件
                $("#" + div.heightUse).bind("onheight", {customer: _div, customer_conf: div}, function (evt, srv) {
                    evt.data.customer.height(srv.source.height());
                    //触发事件
                    evt.data.customer.trigger("onheight", {
                        source: evt.data.customer,
                        source_conf: evt.data.customer_conf
                    });
                });
            }
            if (div.rightUse) {
                _div.css("right", $("#" + div.rightUse).css("right"));
                //绑定事件
                $("#" + div.rightUse).bind("onright", {customer: _div, customer_conf: div}, function (evt, srv) {
                    evt.data.customer.css("right", srv.source.css("right"));
                    //触发事件
                    evt.data.customer.trigger("onright", {
                        source: evt.data.customer,
                        source_conf: evt.data.customer_conf
                    });
                });
            }
            if (div.bottomUse) {
                _div.css("bottom", $("#" + div.bottomUse).css("bottom"));
                //绑定事件
                $("#" + div.bottomUse).bind("onbottom", {customer: _div, customer_conf: div}, function (evt, srv) {
                    evt.data.customer.css("bottom", srv.source.css("bottom"));
                    //触发事件
                    evt.data.customer.trigger("onbottom", {
                        source: evt.data.customer,
                        source_conf: evt.data.customer_conf
                    });
                });
            }

            //panel是否可以改变尺寸
            var css_para = {position: "absolute", top: 0, left: 0, right: 0, bottom: 0};
            if (div.resizeTop) {
                var splitT = $("<div class='panel-split-v panel-split-t'></div>").appendTo(_div);
                css_para.top = "2px";
                var x = y = 0;

                function mouseDown(e) {
                    y = e.pageY;
                    $(document).bind("mousemove", {
                        target: e.data.target,
                        conf: e.data.conf
                    }, mouseMove).bind("mouseup", {target: e.data.target, conf: e.data.conf}, mouseUp);
                    e.preventDefault();
                }

                function mouseMove(e) {
                    var dy = e.pageY - y;
                    bshow.cacl(null, dy, e.data.conf, bshow.POS.T);
                    y = e.pageY;
                    e.preventDefault();
                }

                function mouseUp(e) {
                    $(document).unbind("mousemove", mouseMove).unbind("mouseup", mouseUp);
                }

                splitT.bind("mousedown", {target: _div, conf: div}, mouseDown);
            }
            if (div.resizeLeft) {
                var splitT = $("<div class='panel-split-h panel-split-l'></div>").appendTo(_div);
                css_para.left = "2px";
                var x = y = 0;

                function mouseDown(e) {
                    x = e.pageX;
                    $(document).bind("mousemove", {
                        target: e.data.target,
                        conf: e.data.conf
                    }, mouseMove).bind("mouseup", mouseUp);
                    e.preventDefault();
                }

                function mouseMove(e) {
                    var dx = e.pageX - x;
                    x = e.pageX;
                    bshow.cacl(dx, null, e.data.conf, bshow.POS.L);
                    e.preventDefault();
                }

                function mouseUp(e) {
                    $(document).unbind("mousemove", mouseMove).unbind("mouseup", mouseUp);
                }

                splitT.bind("mousedown", {target: _div, conf: div}, mouseDown);
            }
            if (div.resizeRight) {
                var splitT = $("<div class='panel-split-h panel-split-r'></div>").appendTo(_div);
                css_para.right = "2px";
                var x = y = 0;

                function mouseDown(e) {
                    x = e.pageX;
                    $(document).bind("mousemove", {
                        target: e.data.target,
                        conf: e.data.conf
                    }, mouseMove).bind("mouseup", mouseUp);
                    e.preventDefault();
                }

                function mouseMove(e) {
                    var dx = e.pageX - x;
                    x = e.pageX;
                    bshow.cacl(dx, null, e.data.conf, bshow.POS.R);
                    e.preventDefault();
                }

                function mouseUp(e) {
                    $(document).unbind("mousemove", mouseMove).unbind("mouseup", mouseUp);
                }

                splitT.bind("mousedown", {target: _div, conf: div}, mouseDown);
            }
            if (div.resizeBottom) {
                var splitT = $("<div class='panel-split-v panel-split-b'></div>").appendTo(_div);
                css_para.bottom = "2px";
                var x = y = 0;

                function mouseDown(e) {
                    y = e.pageY;
                    $(document).bind("mousemove", {
                        target: e.data.target,
                        conf: e.data.conf
                    }, mouseMove).bind("mouseup", {target: e.data.target, conf: e.data.conf}, mouseUp);
                    e.preventDefault();
                }

                function mouseMove(e) {
                    var dy = e.pageY - y;
                    y = e.pageY;
                    bshow.cacl(null, dy, e.data.conf, bshow.POS.B);
                    e.preventDefault();
                }

                function mouseUp(e) {
                    $(document).unbind("mousemove", mouseMove).unbind("mouseup", mouseUp);
                }

                splitT.bind("mousedown", {target: _div, conf: div}, mouseDown);
            }

            //创建内容区容器
            var mainArea = $("<div class='panel-maintank'></div>").appendTo(_div).css(css_para);
            if (div.content) {
                mainArea.html(div.content);
            }
            if (div.children) {
                bshow.layoutPanels(mainArea, div.children);
            }
        }
    }

    bshow.orderPanels = function (conf) {

    }
    bshow.POS = {
        L: "left",
        R: "right",
        T: "top",
        B: "bottom",
        LB: "leftbottom",
        LT: "leftop",
        RT: "righttop",
        RB: "rightbottom"
    };
    bshow.SOLU = {A: "top bottom,left right", B: "top height,left width", C: "height bottom,width right"};
    bshow.cacl = function (dx, dy, boxconf, pos) {
        ///<summary>根据鼠标的上下偏移量、拖拉发生的位置来改变容器的尺寸和定位的值</summary>
        ///<param name="dx">鼠标水平偏移量</param>
        ///<param name="dy">鼠标垂直偏移量</param>
        ///<param name="el">容器元素</param>
        ///<param name="posi">发生拖拉的位置:</param>
        var el = $("#" + boxconf.id);//要进行拖拉的元素
        var index = 0;//0:拖拉的是上下边框,1:拖拉的是左右边框
        var ahead = 0;//0:拖拉的是上、左边框,1:拖拉的是下、右边框
        if (pos == bshow.POS.T || pos == bshow.POS.B) {
            index = 0;
            ahead = pos == bshow.POS.T ? 0 : 1;

        } else if (pos == bshow.POS.L || pos == bshow.POS.R) {
            index = 1;
            ahead = pos == bshow.POS.L ? 0 : 1;
        }
        var solu = bshow.judgeSolu(boxconf, index);
        var arr = solu.split(",")[index].split(" ");


        if (solu == bshow.SOLU.A) {
            //如果是方案A
            if (ahead == 0) {
                //如果是上、左边框 top(left)直接加上水平或垂直方向的偏移量
                el.css(arr[0], parseFloat(el.css(arr[0]).substring(0, el.css(arr[0]).length - 2)) + parseFloat(index == 0 ? dy : dx));
                el.trigger("on" + arr[0], {source: el, source_conf: boxconf});
            } else {
                //如果是下、右边框 bottom(right)直接减去水平或垂直的偏移量
                el.css(arr[1], parseFloat(el.css(arr[1]).substring(0, el.css(arr[1]).length - 2)) - parseFloat(index == 0 ? dy : dx));
                el.trigger("on" + arr[1], {source: el, source_conf: boxconf});
            }

        } else if (solu == bshow.SOLU.B) {
            //如果是方案B
            if (ahead == 0) {
                //如果是上、左边框 top和left加上垂直或水平偏移量,同时height和width减去垂直或水平的偏移量
                el.css(arr[0], parseFloat(el.css(arr[0]).substring(0, el.css(arr[0]).length - 2)) + parseFloat(index == 0 ? dy : dx));
                el.trigger("on" + arr[0], {source: el, source_conf: boxconf});
                el.css(arr[1], parseFloat(el.css(arr[1]).substring(0, el.css(arr[1]).length - 2)) - parseFloat(index == 0 ? dy : dx));
                el.trigger("on" + arr[1], {source: el, source_conf: boxconf});
            } else {
                //如果是下、左边框 bottom(right)直接加上垂直或水平的偏移量即可
                el.css(arr[1], parseFloat(el.css(arr[1]).substring(0, el.css(arr[1]).length - 2)) + parseFloat(index == 0 ? dy : dx));
                el.trigger("on" + arr[1], {source: el, source_conf: boxconf});
            }
        } else {
            //如果是方案C
            if (ahead == 0) {
                //如果是上、左边框 top(left)直接减去垂直或水平的偏移量即可
                el.css(arr[0], parseFloat(el.css(arr[0]).substring(0, el.css(arr[0]).length - 2)) - parseFloat(index == 0 ? dy : dx));
                //触发事件
                el.trigger("on" + arr[0], {source: el, source_conf: boxconf});
            } else {
                //如果是下、右边框 top(left)加上垂直或水平的偏移量,同时bottom(right)减去垂直或水平的偏移量
                el.css(arr[0], parseFloat(el.css(arr[0]).substring(0, el.css(arr[0]).length - 2)) + parseFloat(index == 0 ? dy : dx));
                //触发事件
                el.trigger("on" + arr[0], {source: el, source_conf: boxconf});
                el.css(arr[1], parseFloat(el.css(arr[1]).substring(0, el.css(arr[1]).length - 2)) - parseFloat(index == 0 ? dy : dx));
                el.trigger("on" + arr[1], {source: el, source_conf: boxconf});
            }
        }
    }

    bshow.judgeSolu = function (elconf, flag) {
        ///<summary>判断是那种方案</summary>
        ///<param name="elconf">容器配置对象</param>
        ///<param name="flag">0:判断垂直方向的方案,1:判断水平方向上的方案</param>
        if (flag == 0) {
            //垂直方向上的方案
            if (elconf.top !== undefined || elconf.topUse || elconf.topLink) {
                if (elconf.height !== undefined || elconf.heightUse) {
                    //如果使用的是top和height表示方案B
                    return bshow.SOLU.B;
                } else {
                    //如果使用的是top和bottom表示方案A
                    return bshow.SOLU.A;
                }
            } else {
                //如果使用的是height和bottom表示方案C
                return bshow.SOLU.C;
            }
        } else if (flag == 1) {
            //水平方向上的方案
            if (elconf.left !== undefined || elconf.leftUse || elconf.leftLink) {
                if (elconf.width !== undefined || elconf.widthUse) {
                    return bshow.SOLU.B;
                } else {
                    return bshow.SOLU.A;
                }
            } else {
                return bshow.SOLU.C;
            }
        }
        return undefined;
    }

})(jQuery, "bshow");