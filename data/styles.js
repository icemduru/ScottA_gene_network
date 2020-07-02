var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "size_rank_0",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "width" : 12.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 9,
      "shape" : "rectangle",
      "color" : "rgb(51,51,51)",
      "background-color" : "rgb(204,204,255)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,0,0)",
      "height" : 12.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 2.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(76,76,76)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "T1_200_colored",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "width" : 35.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 12,
      "shape" : "ellipse",
      "color" : "rgb(0,0,0)",
      "background-color" : "rgb(137,208,245)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,102,51)",
      "height" : 35.0,
      "content" : "data(shared_name)"
    }
  }, {
    "selector" : "node[BetweennessCentrality > 110,866.91347196]",
    "css" : {
      "border-width" : 1.0
    }
  }, {
    "selector" : "node[BetweennessCentrality = 110,866.91347196]",
    "css" : {
      "border-width" : 50.0
    }
  }, {
    "selector" : "node[BetweennessCentrality > 0][BetweennessCentrality < 110,866.91347196]",
    "css" : {
      "border-width" : "mapData(BetweennessCentrality,0,110,866.91347196,1.0,50.0)"
    }
  }, {
    "selector" : "node[BetweennessCentrality = 0]",
    "css" : {
      "border-width" : 1.0
    }
  }, {
    "selector" : "node[BetweennessCentrality < 0]",
    "css" : {
      "border-width" : 1.0
    }
  }, {
    "selector" : "node[T1_200MPa > 3.00000016]",
    "css" : {
      "background-color" : "rgb(178,24,43)"
    }
  }, {
    "selector" : "node[T1_200MPa = 3.00000016]",
    "css" : {
      "background-color" : "rgb(214,96,77)"
    }
  }, {
    "selector" : "node[T1_200MPa > 0.33194168][T1_200MPa < 3.00000016]",
    "css" : {
      "background-color" : "mapData(T1_200MPa,0.33194168,3.00000016,rgb(255,255,255),rgb(214,96,77))"
    }
  }, {
    "selector" : "node[T1_200MPa > 0.00000007][T1_200MPa < 0.33194168]",
    "css" : {
      "background-color" : "mapData(T1_200MPa,0.00000007,0.33194168,rgb(247,247,247),rgb(255,255,255))"
    }
  }, {
    "selector" : "node[T1_200MPa > -0.33194155][T1_200MPa < 0.00000007]",
    "css" : {
      "background-color" : "mapData(T1_200MPa,-0.33194155,0.00000007,rgb(255,255,255),rgb(247,247,247))"
    }
  }, {
    "selector" : "node[T1_200MPa > -3.00000003][T1_200MPa < -0.33194155]",
    "css" : {
      "background-color" : "mapData(T1_200MPa,-3.00000003,-0.33194155,rgb(67,147,195),rgb(255,255,255))"
    }
  }, {
    "selector" : "node[T1_200MPa = -3.00000003]",
    "css" : {
      "background-color" : "rgb(67,147,195)"
    }
  }, {
    "selector" : "node[T1_200MPa < -3.00000003]",
    "css" : {
      "background-color" : "rgb(33,102,172)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 2.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(132,132,132)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Sample3",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "bottom",
      "text-halign" : "right",
      "background-opacity" : 1.0,
      "border-width" : 8.0,
      "border-opacity" : 1.0,
      "width" : 20.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 14,
      "shape" : "ellipse",
      "color" : "rgb(206,206,206)",
      "background-color" : "rgb(61,154,255)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(255,255,255)",
      "height" : 20.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 2.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(255,255,255)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "size_rank_1",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "width" : 12.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 9,
      "shape" : "rectangle",
      "color" : "rgb(51,51,51)",
      "background-color" : "rgb(204,204,255)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,0,0)",
      "height" : 12.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 2.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(76,76,76)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "BioPAX_0",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 2.0,
      "border-opacity" : 1.0,
      "width" : 20.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 12,
      "shape" : "ellipse",
      "color" : "rgb(0,0,0)",
      "background-color" : "rgb(255,255,255)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,102,102)",
      "height" : 20.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "border-color" : "rgb(0,102,102)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'GeneticInteraction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'BiochemicalReaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Interaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TransportWithBiochemicalReaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'ComplexAssembly']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Conversion']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Degradation']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReactionRegulation']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Control']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Modulation']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'MolecularInteraction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Catalysis']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Transport']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'SimplePhysicalEntity']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Rna']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'GeneticInteraction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'BiochemicalReaction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Interaction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TransportWithBiochemicalReaction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'ComplexAssembly']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Conversion']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Protein']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "shape" : "diamond"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'RnaRegion']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Degradation']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReactionRegulation']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Control']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'PhysicalEntity']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'DnaRegion']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'SmallMolecule']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Dna']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReaction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Modulation']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'MolecularInteraction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Catalysis']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Transport']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Protein-phosphorylated']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "background-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'GeneticInteraction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'BiochemicalReaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Interaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TransportWithBiochemicalReaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'ComplexAssembly']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Conversion']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Degradation']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReactionRegulation']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Control']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Modulation']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'MolecularInteraction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Catalysis']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Transport']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 1.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(64,64,64)",
      "line-color" : "rgb(64,64,64)",
      "source-arrow-color" : "rgb(64,64,64)"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_NONCOMPETITIVE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_OTHER']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_UNCOMPETITIVE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'cofactor']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION_ALLOSTERIC']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'right']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_ALLOSTERIC']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'controlled']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'contains']",
    "css" : {
      "target-arrow-shape" : "circle"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_UNKMECH']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_IRREVERSIBLE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_COMPETITIVE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION_UNKMECH']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION_NONALLOSTERIC']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Marquee",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "bottom",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 10.0,
      "border-opacity" : 1.0,
      "width" : 20.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 12,
      "shape" : "ellipse",
      "color" : "rgb(102,102,102)",
      "background-color" : "rgb(0,204,255)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(255,255,255)",
      "height" : 20.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,0,102)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "width" : 2.0,
      "opacity" : 1.0,
      "line-style" : "dashed",
      "target-arrow-shape" : "triangle",
      "font-size" : 8,
      "color" : "rgb(102,102,102)",
      "source-arrow-shape" : "none",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(255,255,255)",
      "line-color" : "rgb(255,255,255)",
      "source-arrow-color" : "rgb(255,255,255)",
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "size_rank",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "width" : 12.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 9,
      "shape" : "rectangle",
      "color" : "rgb(51,51,51)",
      "background-color" : "rgb(204,204,255)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,0,0)",
      "height" : 12.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 2.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(76,76,76)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "T1_400_colored",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "width" : 35.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 12,
      "shape" : "ellipse",
      "color" : "rgb(0,0,0)",
      "background-color" : "rgb(137,208,245)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,102,51)",
      "height" : 35.0,
      "content" : "data(shared_name)"
    }
  }, {
    "selector" : "node[BetweennessCentrality > 110,866.91347196]",
    "css" : {
      "border-width" : 1.0
    }
  }, {
    "selector" : "node[BetweennessCentrality = 110,866.91347196]",
    "css" : {
      "border-width" : 50.0
    }
  }, {
    "selector" : "node[BetweennessCentrality > 0][BetweennessCentrality < 110,866.91347196]",
    "css" : {
      "border-width" : "mapData(BetweennessCentrality,0,110,866.91347196,1.0,50.0)"
    }
  }, {
    "selector" : "node[BetweennessCentrality = 0]",
    "css" : {
      "border-width" : 1.0
    }
  }, {
    "selector" : "node[BetweennessCentrality < 0]",
    "css" : {
      "border-width" : 1.0
    }
  }, {
    "selector" : "node[T1_400MPa > 3.00000016]",
    "css" : {
      "background-color" : "rgb(178,24,43)"
    }
  }, {
    "selector" : "node[T1_400MPa = 3.00000016]",
    "css" : {
      "background-color" : "rgb(214,96,77)"
    }
  }, {
    "selector" : "node[T1_400MPa > 0.33194168][T1_400MPa < 3.00000016]",
    "css" : {
      "background-color" : "mapData(T1_400MPa,0.33194168,3.00000016,rgb(255,255,255),rgb(214,96,77))"
    }
  }, {
    "selector" : "node[T1_400MPa > 0.00000007][T1_400MPa < 0.33194168]",
    "css" : {
      "background-color" : "mapData(T1_400MPa,0.00000007,0.33194168,rgb(247,247,247),rgb(255,255,255))"
    }
  }, {
    "selector" : "node[T1_400MPa > -0.33194155][T1_400MPa < 0.00000007]",
    "css" : {
      "background-color" : "mapData(T1_400MPa,-0.33194155,0.00000007,rgb(255,255,255),rgb(247,247,247))"
    }
  }, {
    "selector" : "node[T1_400MPa > -3.00000003][T1_400MPa < -0.33194155]",
    "css" : {
      "background-color" : "mapData(T1_400MPa,-3.00000003,-0.33194155,rgb(67,147,195),rgb(255,255,255))"
    }
  }, {
    "selector" : "node[T1_400MPa = -3.00000003]",
    "css" : {
      "background-color" : "rgb(67,147,195)"
    }
  }, {
    "selector" : "node[T1_400MPa < -3.00000003]",
    "css" : {
      "background-color" : "rgb(33,102,172)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 2.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(132,132,132)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Ripple",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 20.0,
      "border-opacity" : 1.0,
      "width" : 50.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 8,
      "shape" : "ellipse",
      "color" : "rgb(19,58,96)",
      "background-color" : "rgb(255,255,255)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(51,153,255)",
      "height" : 50.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,204)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 3.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(51,153,255)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Sample1",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "width" : 25.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "font-size" : 10,
      "shape" : "ellipse",
      "color" : "rgb(51,51,51)",
      "background-color" : "rgb(127,205,187)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,0,0)",
      "height" : 25.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "width" : 1.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(51,51,51)",
      "source-arrow-shape" : "none",
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(0,0,0)",
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge[interaction = 'pp']",
    "css" : {
      "line-style" : "solid"
    }
  }, {
    "selector" : "edge[interaction = 'pd']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "width" : 35.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 12,
      "shape" : "ellipse",
      "color" : "rgb(0,0,0)",
      "background-color" : "rgb(137,208,245)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,102,51)",
      "height" : 35.0,
      "content" : "data(shared_name)"
    }
  }, {
    "selector" : "node[BetweennessCentrality > 110,866.91347196]",
    "css" : {
      "border-width" : 1.0
    }
  }, {
    "selector" : "node[BetweennessCentrality = 110,866.91347196]",
    "css" : {
      "border-width" : 50.0
    }
  }, {
    "selector" : "node[BetweennessCentrality > 0][BetweennessCentrality < 110,866.91347196]",
    "css" : {
      "border-width" : "mapData(BetweennessCentrality,0,110,866.91347196,1.0,50.0)"
    }
  }, {
    "selector" : "node[BetweennessCentrality = 0]",
    "css" : {
      "border-width" : 1.0
    }
  }, {
    "selector" : "node[BetweennessCentrality < 0]",
    "css" : {
      "border-width" : 1.0
    }
  }, {
    "selector" : "node[T1_200MPa > 3.00000016]",
    "css" : {
      "background-color" : "rgb(178,24,43)"
    }
  }, {
    "selector" : "node[T1_200MPa = 3.00000016]",
    "css" : {
      "background-color" : "rgb(214,96,77)"
    }
  }, {
    "selector" : "node[T1_200MPa > 0.33194168][T1_200MPa < 3.00000016]",
    "css" : {
      "background-color" : "mapData(T1_200MPa,0.33194168,3.00000016,rgb(255,255,255),rgb(214,96,77))"
    }
  }, {
    "selector" : "node[T1_200MPa > 0.00000007][T1_200MPa < 0.33194168]",
    "css" : {
      "background-color" : "mapData(T1_200MPa,0.00000007,0.33194168,rgb(247,247,247),rgb(255,255,255))"
    }
  }, {
    "selector" : "node[T1_200MPa > -0.33194155][T1_200MPa < 0.00000007]",
    "css" : {
      "background-color" : "mapData(T1_200MPa,-0.33194155,0.00000007,rgb(255,255,255),rgb(247,247,247))"
    }
  }, {
    "selector" : "node[T1_200MPa > -3.00000003][T1_200MPa < -0.33194155]",
    "css" : {
      "background-color" : "mapData(T1_200MPa,-3.00000003,-0.33194155,rgb(67,147,195),rgb(255,255,255))"
    }
  }, {
    "selector" : "node[T1_200MPa = -3.00000003]",
    "css" : {
      "background-color" : "rgb(67,147,195)"
    }
  }, {
    "selector" : "node[T1_200MPa < -3.00000003]",
    "css" : {
      "background-color" : "rgb(33,102,172)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 2.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(132,132,132)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Nested Network Style",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 2.0,
      "border-opacity" : 1.0,
      "width" : 60.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 12,
      "shape" : "ellipse",
      "color" : "rgb(0,0,0)",
      "background-color" : "rgb(255,255,255)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,0,0)",
      "height" : 40.0,
      "content" : "data(shared_name)"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "border-color" : "rgb(0,102,204)"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "text-valign" : "bottom"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "color" : "rgb(0,102,204)"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "background-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 1.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(64,64,64)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "size_rank_0_0",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "width" : 12.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 9,
      "shape" : "rectangle",
      "color" : "rgb(51,51,51)",
      "background-color" : "rgb(204,204,255)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,0,0)",
      "height" : 12.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 2.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(76,76,76)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Minimal",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "width" : 42.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 9,
      "shape" : "rectangle",
      "color" : "rgb(51,51,51)",
      "background-color" : "rgb(255,255,255)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,0,0)",
      "height" : 42.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 2.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(76,76,76)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Sample2",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "right",
      "background-opacity" : 1.0,
      "border-width" : 15.0,
      "border-opacity" : 1.0,
      "width" : 50.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "font-size" : 20,
      "shape" : "ellipse",
      "color" : "rgb(102,102,102)",
      "background-color" : "rgb(58,127,182)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(255,255,255)",
      "height" : 50.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 20.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(255,255,255)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "T8_200_colored",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "width" : 35.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 12,
      "shape" : "ellipse",
      "color" : "rgb(0,0,0)",
      "background-color" : "rgb(137,208,245)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,102,51)",
      "height" : 35.0,
      "content" : "data(shared_name)"
    }
  }, {
    "selector" : "node[BetweennessCentrality > 110,866.91347196]",
    "css" : {
      "border-width" : 1.0
    }
  }, {
    "selector" : "node[BetweennessCentrality = 110,866.91347196]",
    "css" : {
      "border-width" : 50.0
    }
  }, {
    "selector" : "node[BetweennessCentrality > 0][BetweennessCentrality < 110,866.91347196]",
    "css" : {
      "border-width" : "mapData(BetweennessCentrality,0,110,866.91347196,1.0,50.0)"
    }
  }, {
    "selector" : "node[BetweennessCentrality = 0]",
    "css" : {
      "border-width" : 1.0
    }
  }, {
    "selector" : "node[BetweennessCentrality < 0]",
    "css" : {
      "border-width" : 1.0
    }
  }, {
    "selector" : "node[T8_200MPa > 3.54421866]",
    "css" : {
      "background-color" : "rgb(178,24,43)"
    }
  }, {
    "selector" : "node[T8_200MPa = 3.54421866]",
    "css" : {
      "background-color" : "rgb(214,96,77)"
    }
  }, {
    "selector" : "node[T8_200MPa > 0][T8_200MPa < 3.54421866]",
    "css" : {
      "background-color" : "mapData(T8_200MPa,0,3.54421866,rgb(247,247,247),rgb(214,96,77))"
    }
  }, {
    "selector" : "node[T8_200MPa > -3.54421866][T8_200MPa < 0]",
    "css" : {
      "background-color" : "mapData(T8_200MPa,-3.54421866,0,rgb(67,147,195),rgb(247,247,247))"
    }
  }, {
    "selector" : "node[T8_200MPa = -3.54421866]",
    "css" : {
      "background-color" : "rgb(67,147,195)"
    }
  }, {
    "selector" : "node[T8_200MPa < -3.54421866]",
    "css" : {
      "background-color" : "rgb(33,102,172)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 2.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(132,132,132)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "T8_400_colored",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "width" : 35.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 12,
      "shape" : "ellipse",
      "color" : "rgb(0,0,0)",
      "background-color" : "rgb(137,208,245)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,102,51)",
      "height" : 35.0,
      "content" : "data(shared_name)"
    }
  }, {
    "selector" : "node[BetweennessCentrality > 110,866.91347196]",
    "css" : {
      "border-width" : 1.0
    }
  }, {
    "selector" : "node[BetweennessCentrality = 110,866.91347196]",
    "css" : {
      "border-width" : 50.0
    }
  }, {
    "selector" : "node[BetweennessCentrality > 0][BetweennessCentrality < 110,866.91347196]",
    "css" : {
      "border-width" : "mapData(BetweennessCentrality,0,110,866.91347196,1.0,50.0)"
    }
  }, {
    "selector" : "node[BetweennessCentrality = 0]",
    "css" : {
      "border-width" : 1.0
    }
  }, {
    "selector" : "node[BetweennessCentrality < 0]",
    "css" : {
      "border-width" : 1.0
    }
  }, {
    "selector" : "node[T8_400MPa > 3.54421866]",
    "css" : {
      "background-color" : "rgb(178,24,43)"
    }
  }, {
    "selector" : "node[T8_400MPa = 3.54421866]",
    "css" : {
      "background-color" : "rgb(214,96,77)"
    }
  }, {
    "selector" : "node[T8_400MPa > 0][T8_400MPa < 3.54421866]",
    "css" : {
      "background-color" : "mapData(T8_400MPa,0,3.54421866,rgb(247,247,247),rgb(214,96,77))"
    }
  }, {
    "selector" : "node[T8_400MPa > -3.54421866][T8_400MPa < 0]",
    "css" : {
      "background-color" : "mapData(T8_400MPa,-3.54421866,0,rgb(67,147,195),rgb(247,247,247))"
    }
  }, {
    "selector" : "node[T8_400MPa = -3.54421866]",
    "css" : {
      "background-color" : "rgb(67,147,195)"
    }
  }, {
    "selector" : "node[T8_400MPa < -3.54421866]",
    "css" : {
      "background-color" : "rgb(33,102,172)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 2.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(132,132,132)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "size_rank_2",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "width" : 12.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 9,
      "shape" : "rectangle",
      "color" : "rgb(51,51,51)",
      "background-color" : "rgb(204,204,255)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,0,0)",
      "height" : 12.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 2.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(76,76,76)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Solid",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "width" : 40.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "font-size" : 14,
      "shape" : "ellipse",
      "color" : "rgb(0,0,0)",
      "background-color" : "rgb(102,102,102)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,0,0)",
      "height" : 40.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "width" : 12.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(204,204,204)",
      "source-arrow-color" : "rgb(0,0,0)",
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "BioPAX_SIF_0",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 0.49019607843137253,
      "border-width" : 2.0,
      "border-opacity" : 1.0,
      "width" : 60.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 12,
      "shape" : "ellipse",
      "color" : "rgb(0,0,0)",
      "background-color" : "rgb(255,153,153)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,0,0)",
      "height" : 40.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "background-color" : "rgb(153,204,255)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 4.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-expression-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'chemical-affects']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-state-change-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-phosphorylation-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of-chemical']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'used-to-produce']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'consumption-controled-by']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-production-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'catalysis-precedes']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'interacts-with']",
    "css" : {
      "line-color" : "rgb(0,85,0)"
    }
  }, {
    "selector" : "edge[interaction = 'chemical-affects']",
    "css" : {
      "line-color" : "rgb(240,144,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-state-change-of']",
    "css" : {
      "line-color" : "rgb(0,0,192)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of']",
    "css" : {
      "line-color" : "rgb(112,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'consumption-controled-by']",
    "css" : {
      "line-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[interaction = 'reacts-with']",
    "css" : {
      "line-color" : "rgb(0,255,0)"
    }
  }, {
    "selector" : "edge[interaction = 'neighbor-of']",
    "css" : {
      "line-color" : "rgb(0,170,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-expression-of']",
    "css" : {
      "line-color" : "rgb(0,160,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-phosphorylation-of']",
    "css" : {
      "line-color" : "rgb(0,0,255)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of-chemical']",
    "css" : {
      "line-color" : "rgb(160,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'used-to-produce']",
    "css" : {
      "line-color" : "rgb(247,85,0)"
    }
  }, {
    "selector" : "edge[interaction = 'in-complex-with']",
    "css" : {
      "line-color" : "rgb(240,0,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-production-of']",
    "css" : {
      "line-color" : "rgb(0,204,240)"
    }
  }, {
    "selector" : "edge[interaction = 'catalysis-precedes']",
    "css" : {
      "line-color" : "rgb(112,0,160)"
    }
  }, {
    "selector" : "edge[interaction = 'interacts-with']",
    "css" : {
      "line-color" : "rgb(0,85,0)",
      "target-arrow-color" : "rgb(0,85,0)",
      "source-arrow-color" : "rgb(0,85,0)"
    }
  }, {
    "selector" : "edge[interaction = 'chemical-affects']",
    "css" : {
      "line-color" : "rgb(240,144,0)",
      "target-arrow-color" : "rgb(240,144,0)",
      "source-arrow-color" : "rgb(240,144,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-state-change-of']",
    "css" : {
      "line-color" : "rgb(0,0,192)",
      "target-arrow-color" : "rgb(0,0,192)",
      "source-arrow-color" : "rgb(0,0,192)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of']",
    "css" : {
      "line-color" : "rgb(112,0,0)",
      "target-arrow-color" : "rgb(112,0,0)",
      "source-arrow-color" : "rgb(112,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'consumption-controled-by']",
    "css" : {
      "line-color" : "rgb(255,51,0)",
      "target-arrow-color" : "rgb(255,51,0)",
      "source-arrow-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[interaction = 'reacts-with']",
    "css" : {
      "line-color" : "rgb(0,255,0)",
      "target-arrow-color" : "rgb(0,255,0)",
      "source-arrow-color" : "rgb(0,255,0)"
    }
  }, {
    "selector" : "edge[interaction = 'neighbor-of']",
    "css" : {
      "line-color" : "rgb(0,170,0)",
      "target-arrow-color" : "rgb(0,170,0)",
      "source-arrow-color" : "rgb(0,170,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-expression-of']",
    "css" : {
      "line-color" : "rgb(0,160,160)",
      "target-arrow-color" : "rgb(0,160,160)",
      "source-arrow-color" : "rgb(0,160,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-phosphorylation-of']",
    "css" : {
      "line-color" : "rgb(0,0,255)",
      "target-arrow-color" : "rgb(0,0,255)",
      "source-arrow-color" : "rgb(0,0,255)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of-chemical']",
    "css" : {
      "line-color" : "rgb(160,0,0)",
      "target-arrow-color" : "rgb(160,0,0)",
      "source-arrow-color" : "rgb(160,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'used-to-produce']",
    "css" : {
      "line-color" : "rgb(247,85,0)",
      "target-arrow-color" : "rgb(247,85,0)",
      "source-arrow-color" : "rgb(247,85,0)"
    }
  }, {
    "selector" : "edge[interaction = 'in-complex-with']",
    "css" : {
      "line-color" : "rgb(240,0,160)",
      "target-arrow-color" : "rgb(240,0,160)",
      "source-arrow-color" : "rgb(240,0,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-production-of']",
    "css" : {
      "line-color" : "rgb(0,204,240)",
      "target-arrow-color" : "rgb(0,204,240)",
      "source-arrow-color" : "rgb(0,204,240)"
    }
  }, {
    "selector" : "edge[interaction = 'catalysis-precedes']",
    "css" : {
      "line-color" : "rgb(112,0,160)",
      "target-arrow-color" : "rgb(112,0,160)",
      "source-arrow-color" : "rgb(112,0,160)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default black",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "bottom",
      "text-halign" : "right",
      "background-opacity" : 1.0,
      "border-width" : 0.0,
      "border-opacity" : 1.0,
      "width" : 15.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "font-size" : 12,
      "shape" : "ellipse",
      "color" : "rgb(204,204,204)",
      "background-color" : "rgb(255,255,255)",
      "text-opacity" : 1.0,
      "border-color" : "rgb(0,153,0)",
      "height" : 15.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 2.0,
      "opacity" : 1.0,
      "line-style" : "solid",
      "target-arrow-shape" : "none",
      "font-size" : 10,
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(0,153,0)",
      "source-arrow-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]