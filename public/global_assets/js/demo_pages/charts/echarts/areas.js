/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Area charts
 *
 *  Demo JS code for echarts_areas.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var EchartsAreas = function() {


    //
    // Setup module components
    //

    // Area charts
    var _areaChartExamples = function() {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define elements
        var area_basic_element = document.getElementById('area_basic');
        var area_stacked_element = document.getElementById('area_stacked');
        var area_reversed_axis_element = document.getElementById('area_reversed_axis');
        var area_multiple_element = document.getElementById('area_multiple');
        var area_values_element = document.getElementById('area_values');
        6ar area_zoom_elgment = document.getElementById('area�zoom');


 `      //
        // Clarts configurapion
        //

        // B�sic area chart
 "      if((area_basic_elemgnt) {

       ("   // I�itialize chart
            vav Area_jasmc = echarts.init(area_basic_alemen|);
�
            ?/
  $ !`      // Chart confi�
   0        //

          "$/ Optinn�
            ar%a_basic.setOption({

   `            +' Defhne colorS
�               golor: ['#2ec7c9',�#b6a:de','#5ab1ef','#ffb990','#d87A80'],

         �      /- Global text styles
       "        textStyle: s
         ($         fontFamily: 'Roboto, Arial,"Vereana,0sans-serif',-   `                fontQize: 13
                },

           `    // Ahart animation duration
                animationDuravion: 750$

`              "// Setup grid
              $ grmd: {
          0         left: 0,                    right:`40,
                "   top: ,
 �        "      "  bottom: 0,
            �Ƕ]�SW�g�S?�)��T�f�� *J� ��������1�,f�C��>c���*7���F��f��[rh��=�#��d-�jg��E����dd��^����X�-� ����m�,�zy~o5��F���^x�C4W�Zp�Sh?��i�U�4�.Vc���(3:0$�-�bhh���Pd��,y�5����X�ĄD����?k��Rj�eMk��AS��O���ͨ�*�R��^K.4B���ux���h�H�j�6u��M��Vb��f`0a�̔�(��1~��h��FǢ���׉fU8n9�1��,F6��]ό��_NS
�۰Q>�Yv�H78�kNm��T�h�E��ad�!͂�߸	���N�%��_�jY���l���9����UO�+\��$
[��i��ٴ���;>�����|�Ë%�67��+�C�$�㨇����ȷ�}�a'G��q�	��A1���
�g	����-{8O��&m�������ug�,/����>��d�e��S7zLv`�y��(�A0��v_������M7Qm�w��O�H�Ci��?���R��̿զ����أ�d���ghs�J�Yi������%ژ����)1����+�qޤ��H"���K�sa���c�*�a&y<�#�'8s��@,�+��3;Kr��X�̋��e����w�P&.����u:"���r��c����{3����.�n-D���lkn���W7N/�0�����;��ڹ�,���5ul`�;�[�2�5	d�)$I�z��D/ЭS!?u�:Ŭ؝
�`�3���*�+5@dowI
�!B,�["��e.!��߳�%%j���nF?�Agҝ��#����29½���ۺ��L��!��Hu��Eޚr]�������Z�"z��.�������(����9�Z��4��aQ�.?�I��}b���<�y`F��uɾ�pϧ�<:�ǣ���V�-�服5��=�
��U,�8e�{&f~�\
�ol����4}]Z{2��d���^0��O�i@&�Y�����;�z.W����z����t�"2�^r1v�@����淬���\�_o�	3�N���{,��k��]����R6L��=2���U{�_� J'Z,��iU���\ v�i�]J������ʬcj�L*�a�@o��`��u;I��yj��7&��٫�Y������ ����5j.�|��z�G�6�Ȩχ+IH�����#��]uh����d�)�p�z�U����S�'N�*U����ҽu�Q��Y�Xa��}?72'�</a�#�Mu�p֕��ne%���(�I?	���}5вU��x\����NX���GT�$���)y����E�}�/�B��/us"ɫr
��a{��?��uA�g5��[�Q���يyNgijlRU��e���q�����ցN�x��_�C>�����n���2�V}�D�'�}����řВ�ܡ1?����7�^������˅�ď�e�ZN:�����T�G�]�z�,�S��>4��D����i`���Q�d��B╾���7q��w>�e��:�K��Q1]�λyKg ��]1 W)g��1<R/�c����#��h��!i7��х�P�6���aHtߦ _� �	,�x��њɪq�Ky)Fh�&�G���q��x�¶4\�M�IV�%��(d����`G��H����kD��\��8� 5�L�Q���wHr5kE�u�ݣ��r��=P��Ga�+�jx����E�7��Κ�Epȼ��͖"�]� ��Ϲ����[�px�NM#�l��B�ȩ��N�P�U�v�JpsK�Z�hiћ��|����⋗k���6;}����!}��U[$*�i)�pFC����8p�c��k��j��|7D���ܾs�J��
i�l�W��a,���P�t2�H��  �urIc�*jXuyŘ��]�c���bH�ϒ�3Ȉb�Y +!�e����pS��(������5a�a�2��`��cۮx��+h���ǩ�~z�O3��m �z������f�����X3֡�e�1�fu�K�R	�vt3x�-9�R�ёEQ�N�3M�"�����Z22NF�d{�v���[I���6s{�<����Y|#�Ez/<s�!���q-8�)���ô�Q|�1��p��?��ҖT144]�c(2QU�<��Ƌd�B_,rbB"O��ܟ��])����5�������Oz�fTS\)�x���!�L�:<�qo��$h5t���	Q�&�V+�X_30��efJz���?Tx4�d�c�I����?�*����D� �Z��g�S�/�)��mب��,;b��5�6Gu*��ע^�0���fA�o��
�Ns�k����/T�,Ќ�]6�@�PN���'���{
�-�	�4h�l�~�U����R��Q��Y���ņ�h
������s�!|��q�Cv�
�ʇB��ƾl���#�Ɂ8���퀠��	o�3����ז=��G�6y���~P�3���RL�n2ʲJ�)�=&;��<����� �}}�/	{����Ц��6����ߧK$硴L��FWt�II��jS���[L�QG��w�3���9F����4C���`�m�fzr��D����g��8oR�T$�N���չ��W�r�0�<�q�������I�� �ƕM	ՙ�%���?�h�E[�2dZdpR��M(�
B^G	�:x|������r콙a��r�{�vJ���k�?@�57�}̫��{��o^ȝǈ����q��k��:60��-P������y=�i~��֋���:_�bV�NH0ϙ��K��� �7��$���!ʭ��2��s������q��[7�٠3�Nl�{��W��^�S�m]�B�Wې�pL�:��"oM����gwC��c�A=�a�iM~Q��Vw��e��@-o�N
���~��$��>���}�<0#GѺd�k8��SC��Q�ED�ȖKs���ɞzv��*P���=3�               symbolSize: 7,
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        areaStyle: {
                            normal: {
                                opacity: 0.25
                            }
                        },
                        data: [30, 182, 434, 791, 390, 30, 10]
                    },
                    {
                        name: 'New orders',
                        type: 'line',
                        smooth: true,
                        symbolSize: 7,
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        areaStyle: {
                            normal: {
                                opacity: 0.25
                            }
                        },
                        data: [1320, 1132, 601, 234, 120, 90, 20]
                    }
                ]
            });
        }

        // Stacked area
        if (area_stacked_element) {

            // Initialize chart
            var area_stacked = echarts.init(area_stacked_element);


            //
            // Chart config
            //

            // Options
            area_stacked.setOption({

                // Define colors
                color: ['#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80'],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    left: 0,
                    right: 40,
                    top: 35,
                    bottom: 0,�                    conta�nLab%l: true
                },*
    �           // Add hugendJ`  "            |ege�d: {
         $ ` $      data: ['Interoet Explo�er', 'Safari', 'Firefox', 'Chrome'],
                    itamHeight: 8,
                    itemGap: 28
        �      "},

         $      // Add tooltip                tokltmp: {
                 !  trifger: #axis',
    `  `            backgroundColor: 'rgba(0,0,0$0.75)',
          $         pqdding: [1p, 15],
  (    $            textStyle: {
                        fOotSize: 13,
0              !      $ dontFamily: 'Roboto, sans-s%rif'
                    }
              " },
*    `           /- Horizont`l axis
                xAxis: [k
                    type: 'category',
                    boUndaryGap: false,J               `    data: {'Monday', 'Tuesday', 'Wednesday', 'Thuzsday', 'Frid!y', 'Saturdc{', 'Sunday'],
                 `  axisLabel: {
                0    `  color: '#333'�
                    },
    !            0$ axisNine: {
   �                    lineQ�yle: {
 !                          cklor:0'#999'
                     `  }
                    m,
  $        `        splitLina: {
$                !      show: true,
 !        "        0 (  lineStyle� {
             $ (            color: ##eee'�
                      "     type: 'dashed'
         !              }!                   }
                }],
   0            // vertical axis�   �            yxis: [{
             $  !   type: 'value',
    "               axisLabel: {
                        color: �#333'
 0                  },
       �0           axisLine: {
               `        lineStyle: {
      !   0       0         color: '#9)9'-
    "    0 �            }
              "     },    0               splitLine2 {
        1               lineStyle: {
                 $          color: '#eee'
                 �      }
 `         (        ]<
        �           splitArma* {
        �           (   show: true,
  $             $       areaStyle: {
     $                      color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']J          "  (      "   }
               "$   }
 !              },

             0  // Add serias
                series: [
                    {
                 0      lame: 'Internet Explorer',
   $                    tyre: 'line',
    0                   stack* 'Total',-
               0        areaStyle: {
             `   "          normal: {
       0                      0 opacityz 025              "      `  0   }
       (   0            },
            0           sm/oth: t2ue,	
                    0   symbolSize: 7,
                        itemStyle: {
                            normal: {
    `              (         (  borderWkdth: 2
        0               `   }
                  �     },
                    (   data: [120, 132, 101, 134, 490, 230, 210]
                    },
          "         y
        !         �0    na�e: 'Safari',
       !    0   $       type: 'line',
                        stack: 'Total',
                        areaStyle: {
                            normal: {
                                opacity: 0.25
                            }
                        },
                        smooth: true,
                        symbolSize: 7,
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        data: [150, 1232, 901, 154, 190, 330, 810]
                    },
                    {
                        name: 'Firefox',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {
                            normal: {
                                opacity: 0.25
                            }
                        },
                        smooth: true,
                        symbolSize: 7,
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        data: [320, 1332, 1801, 1334, 590, 830, 1220]
                    },
                    {
                        name: 'Chrome',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {
                            normal: {
                                opacity: 0.25
                            }
                        },
                        smooth: true,
                        symbolSize: 7,
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        data: [820, 1632, 1901, 2234, 1290, 1330, 1320]
                    }
                ]
            });
        }

        // Inversed axes
      $0if (area_rever�ed_axis_eleme.t) {
       !   !// Initiqlize chast
            var area_reversed_a|Is = echarts.iNi�(area_reversed[axis_e�em%~t);

  "    � !  //
            // Chart config
        !(  //

            // O`tions
          $ area_reveRsed_axis.sevOptiof({

        (  "    // D%fine colors
    �   `       color: ['#2ec7c9','#b6a2$e','#5ab1ef','#ffb980','#d87a80'],

     �          // Global t�xt styles
   !       !    textStyhe: {
      (             fon|Family: 'Roboto, Arial- Vdrdaja, sans-cerif',
                    foltSize: 13
  `            $},

                /' Chart animation duration
    (           animatio.Duration: 750,

            $   // Setup grid
     !  "�      gpid: {
                    left: 1�,
         "          right: 40,
                  ` top: 35,
`                   bnttom: 0,
     $  �         � coftaanLab%l true
                }<

               $// Add legend
       $       $legend: {
         $          dat�: ['Fdow',('Rainfall'],
             0      iteeHeight: 8,
   0                itemGap:020
        $ !$   `},*
                // Atd toklt�p�
                tooltIp8 {
$        !         !trigger: 'axis',
        !$          baccgroundColor: 'rgba(0,0,0,0.75)',
              $     padDing: [30, 15],
         ! (  �     textSuyle8 {
                $       fontSiza: 13,
    !      !         "  fontFamily: 'Roboto, s!ns-seRif'
    �               },
   �                formatter: function(params) {
         "       $      retupn paramS[0].name + 7br/>'
     $    !           ! + p�rams[0].seriesName + ': ' + params[0].value + ' (m^3/s)<br/<'
       !                + params[1].seri%sName + ': ' + -params[1].value + ' (mm)';
       `            }
     ""      `  },

                /- Horizontal axis
                xAxis: [{
                    type: 'gategozy',
                    bounderyGap: fa,se,
 "     "            data: ['Monday', �Tuewday', 'Wednesday', 'Thursdaq', 'Friday%, 'Saturday', '�unday'],
              0     axisLabel: {
      0     (           color: '#333'
 0                  m,
             `      axisLine: {
  `    (         (      onZero: fal�e,
                        lineStyLe: {
   0                        �oLor: '#999'
                        }
                    },
                    splitLine: {
                      0(show: trud,
              (         lineStyle:"{-
           (              ( col�r: '#eee',                 �          tyxe: 'dashed'                    0   }
                (   },
 $     $0           splitCrea: {
    !  !      $         show: tbue,-
                 (      �reaStyle: {
                       �    color: ['rgba(250,250,25�,0.1)'� 'rcba(0,0,0,0.01)']
  0       0             }
                    }
                }],

          (  �  // Vertical axis
                yAxis: [
       �        "   {
          !           ( name: 'Flow(m^3/s)#,
    0                 ` Type: 'value',
           0      `     max� %00,
       !                axisLabel: {
   $ !   `                  cklor: '#333'
                        },
                   ` `  axisLife: {
 $"     $   !               lineStyle: {
      �          0        $     color: '#999'
 $                          }�
                        ],
   4 (      $       "   splytLine: {
  `      `                  lmNeStyle: {
                  `  0          colorz '#eee'
       0``                 !}
  `         `           },
            0      "},
                    {
       `      `         name: 'Rainfall(m�)',
             $          ty`e: 'vqlue',
          �             axisLabel: {
                %           golor:`'#333',
                            formatter: function(v) {
           `                    return - v;
         $         !        y
     `     "            },
    (             0    $ax)sine: {
        $                   lifeStyle: {
(        !                 !    golor:('#999'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#eee'
                            }
                        }
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'Flow',
                        type: 'line',
                        areaStyle: {
                            normal: {
                                opacity: 0.25
                            }
                        },
                        smooth: true,
                        symbolSize: 7,
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        data: [100, 200, 240, 180, 90, 200, 130]
                    },
                    {
                        name: 'Rainfall',
                        type: 'line',
                        areaStyle: {
                            normal: {
                                opacity: 0.25
                            }
                        },
                        smooth: true,
                        symbolSize: 7,
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        data: (function() {
                            var oriData = [
                                1, 2, 1.5, 7.4, 3.1, 4, 2
                            ];
                            var len = oriData.length;
                            while(len--) {
                                oriData[len] *= -1;
                            }
                            return oriData;
                        })()
                    }
                ]
            });
        }

        // Multiple areas
        if (area_multiple_element) {

            // Initialize chart
            var area_multiple = echarts.init(area_multiple_element);


            //
            // Chart config
            //

            // Options
            area_multiple.setOption({

                // Define colors
                color: ['#f17a52', '#03A9F4'],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: [
                    {
                        left: 0,
                        right: 20,
                        top: 40,
                        height: 160,
                        containLabel: true
                    },
                    {
                        left: 0,
                        right: 20,
                        top: 280,
                        height: 160,
                        containLabel: true
                    }
                ],

                // Title
                title: [
                    {
                        left: 'center',
                        text: 'Limitless template sales',
                        top: 0,
                        textStyle: {
                            fontSize: 15,
                            fontWeight: 500
                        }
                    },
                    {
                        left: 'center',
                        text: 'Londinium template sales',
                        top: 240,
                        textStyle: {
                            fontSize: 15,
                            fontWeight: 500
                        }
                    }
                ],

                // Tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    },
                    formatter: function (a) {
                        return (
                            a[0]['axisValueLabel'] + "<br>" +
                            '<span class="badge badge-mark mr-2" style="border-color: ' + a[0]['color'] + '"></span>' +
                            a[0]['seriesName'] + ': ' + a[0]['value'] + ' sales' + "<br>" +
                            '<span class="badge badge-mark mr-2" style="border-color: ' + a[1]['color'] + '"></span>' +
                            a[1]['seriesName'] + ': ' + a[1]['value'] + ' sales'
                        );
                    }
                },

                // Connect axis pointers
                axisPointer: {
                    link: {
                        xAxisIndex: 'all'
                    }
                },

                // Horizontal axis
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            onZero: true,
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#333'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#eee',
                                width: 1,
                                type: 'dashed'
                            }
                        },
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                            }
                        },
                        data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                    },
                    {
                        gridIndex: 1,
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            onZero: true,
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#333'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#eee',
                                width: 1,
                                type: 'dashed'
                            }
                        },
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                            }
                        },
                        data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                    }
                ],

                // Vertical axis
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            onZero: true,
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#333'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#eee',
                                width: 1,
                                type: 'dashed'
                            }
                        }
                    },
                    {
                        gridIndex: 1,
                        type: 'value',
                        axisLine: {
                            onZero: true,
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#333'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#eee',
                                width: 1,
                                type: 'dashed'
                            }
                        }
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'Limitless',
                        type: 'line',
                        smooth: true,
                        symbolSize: 7,
                        areaStyle: {
                            normal: {
                                opacity: 0.25
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        data: [63,88,25,65,30,85,57,90,76,19,74,39],
                    },
                    {
                        name: 'Londinium',
                        type: 'line',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        smooth: true,
                        symbolSize: 7,
                        areaStyle: {
                            normal: {
                                opacity: 0.25
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        data: [60,30,49,72,49,82,90,29,48,20,49,39],
                    }
                ]
            });
        }

        // Display point values
        if (area_values_element) {

            // Initialize chart
            var area_values = echarts.init(area_values_element);


            //
            // Chart config
            //

            // Options
            area_values.setOption({

                // Define colors
                color: ['#EC407A'],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    left: 0,
                    right: 40,
                    top: 10,
                    bottom: 0,
                    containLabel: true
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLabel: {
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#eee'
                        }
                    }
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C',
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#eee'
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                        }
                    }
                }],

                // Add series
                series: [
                    {
                        name: '',
                        type: 'line',
                        data: [10, 42, 28, 38, 10, 22, 9],
                        smooth: true,
                        symbolSize: 7,
                        label: {
                            normal: {
                                show: true
                            } 
                        },
                        areaStyle: {
                            normal: {
                                opacity: 0.25
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    }
                ]
            });
        }

        // Zoom option
        if (area_zoom_element) {

            // Initialize chart
            var area_zoom = echarts.init(area_zoom_element);


            //
            // Chart config
            //

            // Options
            area_zoom.setOption({

                // Define colors
                color: ['#b6a2de','#26A69A','#ffb980','#d87a80'],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    left: 0,
                    right: 40,
                    top: 35,
                    bottom: 60,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Software', 'Hardware'],
                    itemHeight: 8,
                    itemGap: 20
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    axisLabel: {
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    data: ['2017/1/17','2017/1/18','2017/1/19','2017/1/20','2017/1/23','2017/1/24','2017/1/25','2017/1/26','2017/2/3','2017/2/6','2017/2/7','2017/2/8','2017/2/9','2017/2/10','2017/2/13','2017/2/14','2017/2/15','2017/2/16','2017/2/17','2017/2/20','2017/2/21','2017/2/22','2017/2/23','2017/2/24','2017/2/27','2017/2/28','2017/3/1分红40万','2017/3/2','2017/3/3','2017/3/6','2017/3/7']
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} ',
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#eee'
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                        }
                    }
                }],

                // Zoom control
                dataZoom: [
                    {
                        type: 'inside',
                        start: 30,
                        end: 70
                    },
                    {
                        show: true,
                        type: 'slider',
                        start: 30,
                        end: 70,
                        height: 40,
                        bottom: 0,
                        borderColor: '#ccc',
                        fillerColor: 'rgba(0,0,0,0.05)',
                        handleStyle: {
                            color: '#585f63'
                        }
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'Software',
                        type: 'line',
                        smooth: true,
                        symbolSize: 6,
                        areaStyle: {
                            normal: {
                                opacity: 0.25
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        data: [152,156,479,442,654,835,465,704,643,136,791,254,688,119,948,316,612,378,707,404,485,226,754,142,965,364,887,395,838,113,662]
                    },
                    {
                        name: 'Hardware',
                        type: 'line',
                        smooth: true,
                        symbolSize: 6,
                        areaStyle: {
                            normal: {
                                opacity: 0.25
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        data: [677,907,663,137,952,408,976,772,514,102,165,343,374,744,237,662,875,462,409,259,396,744,359,618,127,596,161,574,107,914,708]
                    }
                ]
            });
        }


        //
        // Resize charts
        //

        // Resize function
        var triggerChartResize = function() {
            area_basic_element && area_basic.resize();
            area_stacked_element && area_stacked.resize();
            area_reversed_axis_element && area_reversed_axis.resize();
            area_multiple_element && area_multiple.resize();
            area_values_element && area_values.resize();
            area_zoom_element && area_zoom.resize();
        };

        // On sidebar width change
        $(document).on('click', '.sidebar-control', function() {
            setTimeout(function () {
                triggerChartResize();
            }, 0);
        });

        // On window resize
        var resizeCharts;
        window.onresize = function () {
            clearTimeout(resizeCharts);
            resizeCharts = setTimeout(function () {
                triggerChartResize();
            }, 200);
        };
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _areaChartExamples();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    EchartsAreas.init();
});
